const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const outputPath = path.join(__dirname, "dist");

module.exports = {
    // Input configuration
    entry: path.join(__dirname, "src/index.ts"),

    // Output configuration
    output: {
        path: outputPath,
        filename: "common-ui.js",
        library: "common-ui", // Required to include the bundle as a library in another project
        libraryTarget: "umd", // Required to include the bundle as a library in another project
        publicPath: "/", // Ensures bundle is served from absolute path as opposed to relative
    },

    // Loaders
    module: {
        rules: [
            {
                // .ts and .tsx files to be handled by ts-loader
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                exclude: /node_modules/, // Just the source code
            },
            {
                // .css and .scss files to be handled by sass-loader
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                // Missing exclude, may need to handle files outside the source code
                // (from node_modules)
            },
            {
                // .svg files to be handled by @svgr/webpack
                test: /\.svg$/,
                use: ["@svgr/webpack", "url-loader"],
                exclude: /node_modules/, // Just the source code
            },
        ],
    },

    // Module resolution
    resolve: {
        // File types to be handled
        extensions: [".ts", ".tsx", ".js", ".css", ".scss", ".svg"],
    },

    // Force all common-ui peerDependencies to be removed from the final output bundle
    // This is required when dependent project depends on common-ui using relative file path
    // ("@react-user/common-ui": "file:../common-ui") or npm package in package.json
    // If not removed, the dependent project ends up with two instances of such dependencies and
    // confusion ensues
    externals: {
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react",
            umd: "react",
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom",
            umd: "react-dom",
        },
        "@material-ui/core": {
            root: "@MaterialUI/Core",
            commonjs2: "@material-ui/core",
            commonjs: "@material-ui/core",
            amd: "@material-ui/core",
            umd: "@material-ui/core",
        },
        "@material-ui/icons": {
            root: "@MaterialUI/Icons",
            commonjs2: "@material-ui/icons",
            commonjs: "@material-ui/icons",
            amd: "@material-ui/icons",
            umd: "@material-ui/icons",
        },
    },

    // Plugins
    plugins: [
        // Clean webpack output directory
        new CleanWebpackPlugin({
            verbose: true,
        }),
        // Generate index.html from template
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/public/index.html"),
            scriptLoading: "defer",
        }),
        // Copy favicon, logo and manifest for index.html
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "src/public/favicon.ico"),
                    to: outputPath,
                },
                {
                    from: path.join(__dirname, "src/public/common-512x512.png"),
                    to: outputPath,
                },
                {
                    from: path.join(__dirname, "src/public/manifest.json"),
                    to: outputPath,
                },
            ],
        }),
    ],

    // Production mode
    mode: "production",

    // Include cheap-source map for potential debugging
    devtool: "cheap-source-map",
};

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const outputPath = path.join(__dirname, "dist");

module.exports = {
    // Input configuration
    entry: path.join(__dirname, "src/app/index.tsx"),

    // Output configuration
    output: {
        path: outputPath,
        filename: "[name].js",
        publicPath: "/", // Ensures bundle is served from absolute path as opposed to relative
        pathinfo: false, // Development mode optimization
    },

    // Loaders
    module: {
        rules: [
            {
                // .ts and .tsx files to be handled by ts-loader
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                options: {
                    // Speed up compilation in development mode
                    transpileOnly: true,
                },
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
        alias: {
            // Force all common-ui peerDependencies to always be resolved to the node_modules
            // directory of the dependent project
            // This is required when dependent project depends on common-ui using relative file
            // path ("@react-user/common-ui": "file:../common-ui") in package.json
            // Since all common-ui peerDependencies are also its devDependencies, the dependent
            // project ends up with two instances of such dependencies and confusion ensues
            react: path.join(__dirname, "node_modules/react"),
            "react-dom": path.join(__dirname, "node_modules/react-dom"),
            "@material-ui": path.join(__dirname, "node_modules/@material-ui"),
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
                    from: path.join(
                        __dirname,
                        "src/public/data-manager-512x512.png"
                    ),
                    to: outputPath,
                },
                {
                    from: path.join(__dirname, "src/public/manifest.json"),
                    to: outputPath,
                },
            ],
        }),
    ],

    // webpack-dev-server
    devServer: {
        contentBase: outputPath,
        compress: true,
        port: 7002,
        historyApiFallback: {
            // Required to route all requests to index.html so that React router gets to handle all
            // copy pasted deep links
            disableDotRule: true,
        },
    },

    // Development mode
    mode: "development",

    // Use eval-cheap-module-source-map for faster rebuilds
    devtool: "eval-cheap-module-source-map",

    // Development mode optimizations
    optimization: {
        runtimeChunk: true,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
    },
};

import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { theme as defaultTheme } from "../../utils/material-ui/theme.util";
import { AppContainerProps } from "./app-container.interfaces";
import { appContainerStyles } from "./app-container.styles";

export const AppContainer: FunctionComponent<AppContainerProps> = ({
    children,
    theme = defaultTheme,
}: AppContainerProps) => {
    const appContainerClasses = appContainerStyles();

    return (
        // Apply given theme
        <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* Include children */}
            <div className={appContainerClasses.container}>{children}</div>
        </ThemeProvider>
    );
};

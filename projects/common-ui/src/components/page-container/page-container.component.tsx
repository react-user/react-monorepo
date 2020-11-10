import React, { FunctionComponent } from "react";
import { PageContainerProps } from "./page-container.interfaces";
import { pageContainerStyles } from "./page-container.styles";

export const PageContainer: FunctionComponent<PageContainerProps> = (
    props: PageContainerProps
) => {
    const pageContainerClasses = pageContainerStyles();

    return (
        <main className={pageContainerClasses.outerContainer}>
            <div className={pageContainerClasses.innerContainer}>
                {props.children}
            </div>
        </main>
    );
};

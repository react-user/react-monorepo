import React, { FunctionComponent } from "react";
import { AppContainer, PageImage } from "../components";
import { PageContainer } from "../components/page-container/page-container.component";

export const App: FunctionComponent = () => {
    return (
        <div>
            <div>{"Rendering all components from common-ui"}</div>
            <br />
            <div>{"PageContainer in AppContainer:"}</div>
            <AppContainer>
                <PageContainer>
                    <div>{"PageImage:"}</div>
                    <PageImage text="Empty Glass SVG"></PageImage>
                </PageContainer>
            </AppContainer>
        </div>
    );
};

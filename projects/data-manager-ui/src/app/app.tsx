import { AppContainer, PageContainer, PageImage } from "@react-user/common-ui";
import React, { FunctionComponent } from "react";

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

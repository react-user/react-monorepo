import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./app";

// Aplication entry point
ReactDOM.render(
    <StrictMode>
        <App/>
    </StrictMode>,
    document.getElementById("root") as HTMLElement
);

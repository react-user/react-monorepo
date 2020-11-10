import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { App } from "./app";

let documentBody: RenderResult;

describe("Test App", () => {
    beforeEach(() => {
        documentBody = render(<App />);
    });

    it("renders correctly", () => {
        expect(documentBody).toBeDefined();
    });
});

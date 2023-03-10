import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

afterEach(() => {
    cleanup();
});

describe("App", () => {
    test("rendering", () => {
        render(<MemoryRouter><App></App></MemoryRouter>);
        
        const main = document.querySelector("main");
        const header = document.querySelector("header");
        const footer = document.querySelector("footer");

        expect(main).toBeInTheDocument();
        expect(header).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    });

    test("Home page", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App></App>
            </MemoryRouter>
        );
        const home = document.querySelector("#main-content.home");

        expect(home).toBeInTheDocument();
    });

    test("Not found page", () => {
        render(
            <MemoryRouter initialEntries={["/any"]}>
                <App></App>
            </MemoryRouter>
        );
        const notFound = document.querySelector("#main-content.not-found");

        expect(notFound).toBeInTheDocument();
    });

    test("About page", () => {
        render(
            <MemoryRouter initialEntries={["/about/"]}>
                <App></App>
            </MemoryRouter>
        );
        const about = document.querySelector("#main-content.about");

        expect(about).toBeInTheDocument();
    });

    test("Lodging page", () => {
        render(
            <MemoryRouter initialEntries={["/lodging/b9123946"]}>
                <App></App>
            </MemoryRouter>
        );
        const lodging = document.querySelector("#main-content.lodging");

        expect(lodging).toBeInTheDocument();
    });
});
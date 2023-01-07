import { cleanup, render } from "@testing-library/react"

import Footer from './Footer'

afterEach(() => {
    cleanup();
});

describe("Footer component", () => {

    test("rendering", () => {
        render(<Footer></Footer>);
        const footer = document.querySelector("footer");
        expect(footer).toBeInTheDocument();
    });
});
import { cleanup, render } from "@testing-library/react"
import SkipToMain from "./SkipToMain";

afterEach(() => {
    cleanup()
});

describe("SkipToMain component", () => {
    test("rendering", () => {
        render(<SkipToMain></SkipToMain>);
        const link = document.querySelector(".skip-to-main");
        expect(link).toBeInTheDocument();
    })
});
import { cleanup, render} from "@testing-library/react";
import About from "./About";

afterEach(() => {
    cleanup();
});

describe("About page", () => {

    test("rendering", () => {
        render(<About></About>);
        const about = document.querySelector("#page-about");
        expect(about).toBeInTheDocument();
    });
});
import { cleanup, render} from "@testing-library/react";
import About from "./About";

afterEach(() => {
    cleanup();
});

describe("About page", () => {

    test("rendering", () => {
        render(<About></About>);
        const about = document.querySelector("#main-content.about");
        expect(about).toBeInTheDocument();
    });
});
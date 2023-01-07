import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom";
import Banner from "./Banner";

afterEach(() => {
    cleanup();
});

describe("Banner component", () => {
    const textContent = "Lorem ipsum";
    const image = "https://via.placeholder.com/900x200.jpg";
    
    test("rendering", () => {
        render(<Banner></Banner>)
        const banner = document.querySelector('.banner');
        expect(banner).toBeInTheDocument();
    })

    test("title content", () => {
        render(<Banner>{textContent}</Banner>)
        const title = document.querySelector('.banner__title');
        expect(title).toHaveTextContent(textContent);
    })

    test("image property", () => {
        render(<Banner image={image}>{textContent}</Banner>)
        const banner = document.querySelector('.banner');
        expect(banner).toHaveStyle(`background-image: url(${image})`);
    })
});

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
        render(<Banner title={textContent}></Banner>)
        const title = document.querySelector('.banner__title');
        expect(title).toHaveTextContent(textContent);
    })

    test("image", () => {
        render(<Banner><img src={image} /></Banner>)
        const banner = document.querySelector('.banner');
        const img = banner.querySelector('img');
        expect(img.src).toEqual(image);
    })
});

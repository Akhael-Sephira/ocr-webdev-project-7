
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Slideshow from './Slideshow'

afterEach(() => {
    cleanup();
})

describe("Slideshow component", () => {
    const images = [
        "https://via.placeholder.com/900x200.jpg",
        "https://via.placeholder.com/900x200.jpg",
        "https://via.placeholder.com/900x200.jpg",
    ];

    test("rendering", () => {

        render(<Slideshow pictures={images}></Slideshow>);

        const slideshow = document.querySelector(".slideshow");

        expect(slideshow).toBeInTheDocument();
    })

    test("pictures", () => {

        render(<Slideshow pictures={images}></Slideshow>);

        const imgContainer = document.querySelector(".slideshow__img");
        const imgNodes = imgContainer.querySelectorAll("img");

        expect(imgContainer).not.toBeEmptyDOMElement();
        imgNodes.forEach((node, index) => {
            expect(node.src).toContain(images[index]);
        })
    })

    test("changing picture", () => {

        render(<Slideshow pictures={images}></Slideshow>);

        const imgContainer = document.querySelector(".slideshow__img");
        const indicator = document.querySelector(".slideshow__indicator");
        const leftBtn = document.querySelector(".slideshow__left-btn");
        const rightBtn = document.querySelector(".slideshow__right-btn");
        const imgNodes = imgContainer.querySelectorAll("img");

        expect(indicator).toHaveTextContent(`1/${images.length}`);
        expect(imgNodes[0].src).toContain(images[0]);

        fireEvent.click(leftBtn);
        expect(indicator).toHaveTextContent(`${images.length}/${images.length}`);
        expect(imgNodes[images.length - 1].src).toContain(images[images.length - 1]);
        
        fireEvent.click(rightBtn);
        expect(indicator).toHaveTextContent(`1/${images.length}`);
        expect(imgNodes[0].src).toContain(images[0]);
    })
})
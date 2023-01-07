import { render, screen, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom";
import Tag from "./Tag";

afterEach(() => {
    cleanup();
});

describe("Tag component", () => {
    const textContent = "Lorem ipsum";

    test("rendering", () => {
        render(
            <Tag>{textContent}</Tag>
        )
        const tag = document.querySelector('.tag');
        expect(tag).toBeInTheDocument();
    })

    test("text content", () => {
        render(
            <Tag>{textContent}</Tag>
        )
        const tag = document.querySelector('.tag');
        expect(tag).toHaveTextContent(textContent);
    });
});

import { cleanup, screen, render, fireEvent } from "@testing-library/react"

import Collapsible from './Collapsible'

afterEach(() => {
    cleanup();
});

describe("Collapsible component", () => {

    const summary = 'Lorem ipsum';
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    test("rendering", () => {
        render(<Collapsible summary={summary}>{content}</Collapsible>);

        const collapsible = document.querySelector('.collapsible')
        const collapsible__summary = document.querySelector('.collapsible__summary')
        const collapsible__content = document.querySelector('.collapsible__content')
        
        expect(collapsible).toBeInTheDocument();
        expect(collapsible__summary).toHaveTextContent(summary);
        expect(collapsible__content).toHaveTextContent(content);
        expect(collapsible).not.toHaveAttribute("open");
    });

    test("starting open", () => {
        render(<Collapsible summary={summary} open>{content}</Collapsible>);
        
        const collapsible = document.querySelector('.collapsible')
        
        expect(collapsible).toHaveAttribute("open");
    })

    test("opening", () => {
        render(<Collapsible summary={summary}>{content}</Collapsible>);

        const collapsible = document.querySelector('.collapsible')
        
        const collapsible__summary = document.querySelector('.collapsible__summary')
        expect(collapsible).not.toHaveAttribute("open");
        fireEvent.click(collapsible__summary);
        expect(collapsible).toHaveAttribute("open");
    })
})
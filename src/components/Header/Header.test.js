import { cleanup, render } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom'

import Header from './Header'

afterEach(() => {
    cleanup();
})

describe('Header component', () => {

    test('rendering', () => {
        render(<MemoryRouter><Header></Header></MemoryRouter>)
        const header = document.querySelector(".header");
        expect(header).toBeInTheDocument();
    });

    test('home link', () => {
        render(<MemoryRouter><Header></Header></MemoryRouter>)
        const link = document.querySelector("[href='/']");
        expect(link).toBeInTheDocument();
    });

    test('about link', () => {
        render(<MemoryRouter><Header></Header></MemoryRouter>)
        const link = document.querySelector("[href='/about']");
        expect(link).toBeInTheDocument();
    });
})
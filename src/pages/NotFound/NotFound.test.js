import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

afterEach(() => {
    cleanup();
});

describe("NotFound page", () => {
    test("rendering", () => {
        render(<MemoryRouter><NotFound></NotFound></MemoryRouter>);
        const notFound = document.querySelector("#main-content.not-found");
        expect(notFound).toBeInTheDocument();
    });
});
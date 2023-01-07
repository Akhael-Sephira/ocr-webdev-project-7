import { cleanup, render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Lodging from './Lodging';

afterEach(() => {
    cleanup();
});

describe("Lodging page", () => {
    test("rendering", () => {
        render(
            <MemoryRouter initialEntries={["/lodging/b9123946"]}>
                <Routes>
                    <Route path='/lodging/:id' element={<Lodging />} />
                </Routes>
            </MemoryRouter>
        );
        const lodging = document.querySelector("#page-lodging");
        expect(lodging).toBeInTheDocument();
    });

    test("bad id rendering", () => {
        render(
            <MemoryRouter initialEntries={["/lodging/badId"]}>
                <Routes>
                    <Route path='/lodging/:id' element={<Lodging />} />
                </Routes>
            </MemoryRouter>
        );
        const notFound = document.querySelector("#page-notfound");
        expect(notFound).toBeInTheDocument();
    });
});
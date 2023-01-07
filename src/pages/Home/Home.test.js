import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

import lodgings from '../../data/logements.json';

afterEach(() => {
    cleanup();
});

describe("Home page", () => {
    test("rendering", () => {
        render(<MemoryRouter><Home></Home></MemoryRouter>);
        const home = document.querySelector("#page-home");
        expect(home).toBeInTheDocument();
    });

    test("lodgings prop", () => {
        render(<MemoryRouter><Home lodgings={lodgings}></Home></MemoryRouter>);
        const list = document.querySelector(".lodging-list");
        expect(list).not.toBeEmptyDOMElement();
    });

    test("lodgings prop empty", () => {
        render(<MemoryRouter><Home lodgings={[]}></Home></MemoryRouter>);
        const list = document.querySelector(".lodging-list");
        expect(list).toBeEmptyDOMElement();
    });

    test("lodgings prop not an array", () => {
        render(<MemoryRouter><Home lodgings={"notAnArray"}></Home></MemoryRouter>);
        const list = document.querySelector(".lodging-list");
        expect(list).toBeEmptyDOMElement();
    });
});
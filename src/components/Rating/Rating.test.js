import { cleanup, render, screen } from '@testing-library/react'
import Rating from './Rating'

import starEmpty from "../../assets/images/star-empty.svg"
import starFilled from "../../assets/images/star-filled.svg"

afterEach(() => {
    cleanup();
})

describe("Rating component", () => {
    test("rendering", () => {
        render(<Rating note={3}></Rating>);
        const rating = document.querySelector(".rating");
        expect(rating).toBeInTheDocument();
    });

    test("note of 0", () => {
        render(<Rating note={0}></Rating>);
        const rating = document.querySelector(".rating");
        const imgNodes = [...rating.querySelectorAll("img")];
        expect(imgNodes.filter(node => { return node.src.includes(starFilled) }).length).toEqual(0)
        expect(imgNodes.filter(node => { return node.src.includes(starEmpty) }).length).toEqual(5)
    })

    test("note of 3", () => {
        render(<Rating note={3}></Rating>);
        const rating = document.querySelector(".rating");
        const imgNodes = [...rating.querySelectorAll("img")];
        expect(imgNodes.filter(node => { return node.src.includes(starFilled) }).length).toEqual(3)
        expect(imgNodes.filter(node => { return node.src.includes(starEmpty) }).length).toEqual(2)
    })

    test("note of 5", () => {
        render(<Rating note={5}></Rating>);
        const rating = document.querySelector(".rating");
        const imgNodes = [...rating.querySelectorAll("img")];
        expect(imgNodes.filter(node => { return node.src.includes(starFilled) }).length).toEqual(5)
        expect(imgNodes.filter(node => { return node.src.includes(starEmpty) }).length).toEqual(0)
    })

    test("note of -3", () => {
        render(<Rating note={-3}></Rating>);
        const rating = document.querySelector(".rating");
        const imgNodes = [...rating.querySelectorAll("img")];
        expect(imgNodes.filter(node => { return node.src.includes(starFilled) }).length).toEqual(0)
        expect(imgNodes.filter(node => { return node.src.includes(starEmpty) }).length).toEqual(5)
    })
})
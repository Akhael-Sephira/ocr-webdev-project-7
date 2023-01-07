import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LodgingCard from "./LodgingCard";

afterEach(() => {
    cleanup();
})

describe("Lodgingcard component", () => {

    const data = {
        "id": "b9123946",
		"title": "Magnifique appartement proche Canal Saint Martin",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
    }

    test('rendering', () => {
        render(
            <MemoryRouter>
                <LodgingCard title={data.title} cover={data.cover} id={data.id}></LodgingCard>
            </MemoryRouter>
        );
        const lodgingCard = document.querySelector(".lodging-card");
        expect(lodgingCard).toBeInTheDocument();
    });

    test('title', () => {
        render(
            <MemoryRouter>
                <LodgingCard title={data.title} cover={data.cover} id={data.id}></LodgingCard>
            </MemoryRouter>
        );
        const title = document.querySelector(".lodging-card__title");
        expect(title).toHaveTextContent(data.title);
    });

    test('thumb', () => {
        render(
            <MemoryRouter>
                <LodgingCard title={data.title} imgSrc={data.cover} id={data.id}></LodgingCard>
            </MemoryRouter>
        );
        const thumb = document.querySelector(".lodging-card__thumb");
        expect(thumb.src).toContain(data.cover);
    });

    test('link', () => {
        render(
            <MemoryRouter>
                <LodgingCard title={data.title} imgSrc={data.cover} id={data.id}></LodgingCard>
            </MemoryRouter>
        );
        const lodgingCard = document.querySelector(".lodging-card");
        expect(lodgingCard.href).toContain(`/lodging/${data.id}`);
    });
});
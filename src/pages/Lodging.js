import { Navigate, useParams } from "react-router-dom"
import { useMemo } from 'react'
import lodgings from '../assets/logements.json'
import Slideshow from "../components/Slideshow";
import starEmpty from "../assets/images/star-empty.svg"
import starFilled from "../assets/images/star-filled.svg"
import Collapse from "../components/Collapse";
import NotFound from "./NotFound";
import './Lodging.css'

export default function Lodging() {
    const { id } = useParams();
    
    const lodging = useMemo(() => {
        return lodgings.find(item => { return item.id == id });
    }, [id]);

    if (!lodging) return <NotFound />
    // if (!lodging) return <Navigate to="*" />
    
    return (
        <>
            <Slideshow pictures={lodging.pictures}></Slideshow>
            <div className="large-block lodging-informations">
                    <h1 className="lodging-title">{lodging.title}</h1>
                <p className="lodging-location">{lodging.location}</p>
                <div className="lodging-hostinfo">
                    <p className="lodging-hostname">{lodging.host.name}</p>
                    <img className="lodging-hostpic" src={lodging.host.picture} />
                </div>
                <ul className="tag-list">
                    {lodging.tags.map((tag, index) => {
                        return (
                            <li key={index} className="tag">{tag}</li>
                        )
                    })}
                </ul>
                <div className="lodging-rating">
                    {[1,2,3,4,5].map((rating, index) => {
                        return (
                            <img key={index} src={lodging.rating >= rating ? starFilled : starEmpty } />
                        )
                    })}
                </div>
            </div>
            <div className="large-block collapsibles-block">
                <Collapse className="big-summary lodging-description" summary="Description"><p>{lodging.description}</p></Collapse>
                <Collapse className="big-summary lodging-tools" summary="Équipements">
                    <ul>
                        {lodging.equipments.map((equipment, index) => {
                            return (
                                <li key={index}>{equipment}</li>
                            )
                        })}
                    </ul>
                </Collapse>
            </div>
        </>
    )
}
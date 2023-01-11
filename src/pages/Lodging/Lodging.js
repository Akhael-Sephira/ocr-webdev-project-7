import { useParams } from "react-router-dom"
import { useMemo } from 'react'
import lodgings from '../../data/logements.json'
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapsible from "../../components/Collapsible/Collapsible";
import NotFound from "../NotFound/NotFound";
import './Lodging.scss'
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Lodging() {
    const { id } = useParams();
    
    const lodging = useMemo(() => {
        return lodgings.find(item => { return item.id === id });
    }, [id]);

    if (!lodging) return <NotFound />
    
    return (
        <main id="main-content" className="lodging">
            <HelmetProvider>
                <Helmet>
                    <html lang="fr" />
                    <title>{lodging.title + " - Kasa"}</title>
                </Helmet>
            </HelmetProvider>

            <Slideshow pictures={lodging.pictures} className="large-block"></Slideshow>
            <div className="large-block lodging__informations">
                    <h1 className="lodging__title">{lodging.title}</h1>
                <p className="lodging__location">{lodging.location}</p>
                <div className="lodging__hostinfo">
                    <p className="lodging__hostname">{lodging.host.name}</p>
                    <img className="lodging__hostpic" src={lodging.host.picture} alt={lodging.host.name} />
                </div>
                <ul className="lodging__tag-list">
                    {lodging.tags.map((tag, index) => {
                        return (
                            <li key={index}><Tag>{tag}</Tag></li>
                        )
                    })}
                </ul>
                <Rating className="lodging__rating" note={lodging.rating} />
            </div>
            <div className="large-block lodging__collapsibles-block">
                <Collapsible className="big-summary lodging__description" summary="Description"><p>{lodging.description}</p></Collapsible>
                <Collapsible className="big-summary lodging__tools" summary="Équipements">
                    <ul>
                        {lodging.equipments.map((equipment, index) => {
                            return (
                                <li key={index}>{equipment}</li>
                            )
                        })}
                    </ul>
                </Collapsible>
            </div>
        </main>
    )
}
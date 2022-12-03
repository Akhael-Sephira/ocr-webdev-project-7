import Banner from "../components/Banner";
import './Home.css'
import lodgings from '../assets/logements.json'
import LodgingCard from "../components/LodgingCard";

export default function Home() {
    return (
        <>
            <Banner></Banner>
            <ul className="lodging-list large-block">
                {lodgings.map(item => {
                    return (
                        <li key={item.id}>
                            <LodgingCard 
                                title={item.title} 
                                imgSrc={item.cover} 
                                id={item.id}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
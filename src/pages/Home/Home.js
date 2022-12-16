import Banner from "../../components/Banner/Banner";
import LodgingCard from "../../components/LodgingCard/LodgingCard";
import './Home.css'
import lodgings from '../../data/logements.json'

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
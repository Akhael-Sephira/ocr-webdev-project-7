import Banner from "../../components/Banner/Banner";
import LodgingCard from "../../components/LodgingCard/LodgingCard";
import './Home.scss'
import lodgings from '../../data/logements.json'
import bannerImg from '../../assets/images/banner-home.jpg'

export default function Home() {
    return (
        <>
            <Banner image={bannerImg}>Chez vous, partout et ailleurs</Banner>
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
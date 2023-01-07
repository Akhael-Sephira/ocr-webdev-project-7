import Banner from "../../components/Banner/Banner";
import LodgingCard from "../../components/LodgingCard/LodgingCard";
import './Home.scss'
import bannerImg from '../../assets/images/banner-home.jpg'

export default function Home({ lodgings }) {

    if (typeof lodgings !== typeof []) {
        lodgings = [];
    }

    return (
        <main id="page-home">
            <Banner image={bannerImg} className="large-block">Chez vous, partout et ailleurs</Banner>
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
        </main>
    )
}
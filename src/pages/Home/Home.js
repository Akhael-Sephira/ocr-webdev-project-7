import Banner from "../../components/Banner/Banner";
import LodgingCard from "../../components/LodgingCard/LodgingCard";
import './Home.scss'

import bannerJpg from "../../assets/images/banner-home.jpg";
import bannerJpgMobile from "../../assets/images/banner-home-mobile.jpg";
import bannerWebp from "../../assets/images/banner-home.webp";
import bannerWebpMobile from "../../assets/images/banner-home-mobile.webp";

import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home({ lodgings }) {

    if (typeof lodgings !== typeof []) {
        lodgings = [];
    }

    return (
        <main id="main-content" className="home">
            <HelmetProvider>
                <Helmet>
                    <html lang="fr" />
                    <link rel="preconnect" href="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/" />
                    <title>Kasa - Chez vous, partout et ailleurs</title>
                </Helmet>
            </HelmetProvider>

            <Banner title="Chez vous, partout et ailleurs" 
                className="large-block"
            >
                <source srcSet={bannerWebpMobile} type="image/webp" media="(max-width: 600px)" />
                <source srcSet={bannerJpgMobile} type="image/jpeg" media="(max-width: 600px)" />
                <source srcSet={bannerWebp} type="image/webp" />
                <img src={bannerJpg} alt="" />
            </Banner>
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
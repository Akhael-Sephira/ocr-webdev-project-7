import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapsible/Collapsible";

import bannerImg from "../../assets/images/banner-about.jpg"
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function About() {
    return (
        <main id="main-content" className="about">
            <HelmetProvider>
                <Helmet>
                    <html lang="fr" />
                    <title>Kasa - About</title>
                </Helmet>
            </HelmetProvider>

            <Banner image={bannerImg} className="large-block" />
            <Collapse className="medium-block collapsible--small-border" summary="Fiabilité">
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </p>
            </Collapse>
            <Collapse className="medium-block collapsible--small-border" summary="Respect">
                <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </p>
            </Collapse>
            <Collapse className="medium-block collapsible--small-border" summary="Service">
                <p>
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </p>
            </Collapse>
            <Collapse className="medium-block collapsible--small-border" summary="Sécurité">
                <p>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </Collapse>
        </main>
    )
}
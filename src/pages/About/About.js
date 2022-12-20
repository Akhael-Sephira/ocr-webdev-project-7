import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapsible/Collapsible";

import bannerImg from "../../assets/images/banner-about.jpg"

export default function About() {
    return (
        <>
            <Banner image={bannerImg} />
            <Collapse className="medium-block" summary="Fiabilité">
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
            </Collapse>
            <Collapse className="medium-block" summary="Respect">
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </Collapse>
            <Collapse className="medium-block" summary="Service">
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
            </Collapse>
            <Collapse className="medium-block" summary="Sécurité">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </Collapse>
        </>
    )
}
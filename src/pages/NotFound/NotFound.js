import { Link } from "react-router-dom";
import './NotFound.scss'

export default function NotFound() {
    return (
        <main id="page-notfound">
            <p className="notfound__title">404</p>
            <p className="notfound__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="notfound__link" to="/">Retourner sur la page d'accueil</Link>
        </main>
    )
}
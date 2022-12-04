import { Link } from "react-router-dom";
import './NotFound.css'

export default function NotFound() {
    return (
        <>
            <p className="notfound-title">404</p>
            <p className="notfound-text">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="notfound-link" to="/">Retourner sur la page d'accueil</Link>
        </>
    )
}
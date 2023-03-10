import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import './NotFound.scss'

export default function NotFound() {
    return (
        <main id="main-content" className="not-found">
            <HelmetProvider>
                <Helmet>
                    <html lang="fr" />
                    <title>Page introuvable - Kasa</title>
                </Helmet>
            </HelmetProvider>

            <p className="notfound__title">404</p>
            <p className="notfound__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="notfound__link" to="/">Retourner sur la page d'accueil</Link>
        </main>
    )
}
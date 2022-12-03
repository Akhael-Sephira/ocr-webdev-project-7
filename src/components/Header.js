import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.svg'
import './Header.css'

export default function Header() {
    return (
        <header className="large-block">
            <img src={logo} />
            <nav>
                <ul>
                    <li><NavLink to='/'>Accueil</NavLink></li>
                    <li><NavLink to='/about'>A propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
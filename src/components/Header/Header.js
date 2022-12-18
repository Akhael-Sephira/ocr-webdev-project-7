import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.svg'
import './Header.scss'

export default function Header() {
    return (
        <header className="header large-block">
            <img className="header__logo" src={logo} alt="logo" />
            <nav className="header__nav">
                <ul>
                    <li><NavLink to='/'>Accueil</NavLink></li>
                    <li><NavLink to='/about'>A propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
import { NavLink } from "react-router-dom";
import logo from './logo.svg'
import './Header.scss'

/**
 * Creates a header component with a basic navigation.
 * @param className defines additional css classes.
 */
export default function Header({className}) {

    let cname = 'header'; // Default classes of the component.
    if (className !== undefined) {
        cname += ` ${className}`;
    };

    return (
        <header className={cname}>
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
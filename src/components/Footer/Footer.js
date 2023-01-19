import logo from './logo-white.svg'
import './Footer.scss'

/**
 * Creates a footer component
 * @param className defines additional css classes.
 */
export default function Footer({ className }) {

    let cssClasses = 'footer ' + (className || "");

    return (
        <footer className={cssClasses}>
            <img className='footer__logo' src={logo} alt="logo" />
            <p className='footer__copyrights'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
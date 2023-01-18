import logo from './logo-white.svg'
import './Footer.scss'

/**
 * Creates a footer component
 * @param className defines additional css classes.
 */
export default function Footer({ className }) {

    let cname = 'footer'; // Default classes of the component.
    if (className !== undefined) {
        cname += ` ${className}`;
    };

    return (
        <footer className={cname}>
            <img className='footer__logo' src={logo} alt="logo" />
            <p className='footer__copyrights'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
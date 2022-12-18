import logo from '../../assets/images/logo-white.svg'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__logo' src={logo} alt="logo" />
            <p className='footer__copyrights'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
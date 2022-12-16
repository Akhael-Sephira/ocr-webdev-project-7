import './LodgingCard.css'
import { Link } from 'react-router-dom'

export default function LodgingCard({ title, imgSrc, id }) {

    return (
        <Link className='lodging-card' to={'/lodging/' + id}>
            <img className='lodging-card__img' src={imgSrc} />
            <span className='lodging-card__title'>{title}</span>
        </Link>
    )
}
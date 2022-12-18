import './LodgingCard.scss'
import { Link } from 'react-router-dom'

export default function LodgingCard({ title, imgSrc, id }) {

    return (
        <Link className='lodging-card' to={'/lodging/' + id}>
            <img className='lodging-card__thumb' src={imgSrc} alt="thumbnail" />
            <span className='lodging-card__title'>{title}</span>
        </Link>
    )
}
import './LodgingCard.scss'
import { Link } from 'react-router-dom'

/**
 * Creates a lodging card component.
 * @param title defines the title of the card.
 * @param imgSrc defines the source image for the card.
 * @param id defines the associated id used for the link.
 */
export default function LodgingCard({ title, imgSrc, id }) {

    return (
        <Link className='lodging-card' to={'/lodging/' + id}>
            <img className='lodging-card__thumb' src={imgSrc} alt="thumbnail" />
            { title && <span className='lodging-card__title'>{title}</span>}
        </Link>
    )
}
import './LodgingCard.css'

export default function LodgingCard({ title, imgSrc, id }) {

    const handleClick = () => { };

    return (
        <div className='lodging-card' onClick={handleClick}>
            <img src={imgSrc} />
            <p>{title}</p>
        </div>
    )
}
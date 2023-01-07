import './Rating.scss';
import starEmpty from "../../assets/images/star-empty.svg"
import starFilled from "../../assets/images/star-filled.svg"

/**
 * Creates a rating component using 5 stars.
 * @param note defines the number of stars filled.
 * 
 * Note: The stars have only 2 states, they can't be partialy filled.
 */
export default function Rating({ note, className }) {

    let cname = 'rating';
    if (className !== undefined) {
        cname += ` ${className}`;
    };

    return (
        <div className={cname}>
            {[1,2,3,4,5].map((rating, index) => {
                return (
                    <img key={index} src={note >= rating ? starFilled : starEmpty } alt="" />
                )
            })}
        </div>
    )
}
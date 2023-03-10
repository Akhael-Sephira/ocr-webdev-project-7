import './Rating.scss';
import starEmpty from "./star-empty.svg"
import starFilled from "./star-filled.svg"

/**
 * Creates a rating component using 5 stars.
 * @param note defines the number of stars filled.
 * @param className defines additional css classes.
 * Note: The stars have only 2 states, they can't be partialy filled.
 */
export default function Rating({ note, className }) {

    let cssClasses = 'rating ' + (className || "");

    if (note > 5) {
        note = 5;
    } else if (note < 0) {
        note = 0;
    }

    return (
        <div className={cssClasses} role="img" aria-label={`Noté ${note}/5`}>
            {/* Each integer in the array correspond to a star */}
            {[1,2,3,4,5].map((rating, index) => {
                return (
                    <img key={index} 
                        src={note >= rating ? starFilled : starEmpty } 
                        alt="" 
                    />
                )
            })}
        </div>
    )
}
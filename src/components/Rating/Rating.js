import './Rating.scss';
import starEmpty from "../../assets/images/star-empty.svg"
import starFilled from "../../assets/images/star-filled.svg"

export default function Rating({ note, className }) {
    return (
        <div className={'rating ' + className}>
            {[1,2,3,4,5].map((rating, index) => {
                return (
                    <img key={index} src={note >= rating ? starFilled : starEmpty } alt="" />
                )
            })}
        </div>
    )
}
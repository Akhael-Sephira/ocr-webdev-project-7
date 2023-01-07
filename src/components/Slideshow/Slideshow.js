import { useState } from 'react'
import './Slideshow.scss'
import arrowImg from '../../assets/images/arrow.svg'

/**
 * Creates a slide show component.
 * @param pictures defines all the images of the slide show.
 */
export default function Slideshow({pictures, className}) {
    const [currentlyShown, setCurrentlyShown] = useState(0);

    const changeImg = (direction) => {
        if (direction < 0) {
            if (currentlyShown === 0) setCurrentlyShown(pictures.length - 1);
            else setCurrentlyShown(currentlyShown - 1);
        } else {
            if (currentlyShown === pictures.length - 1) setCurrentlyShown(0);
            else setCurrentlyShown(currentlyShown + 1);
        }
    }

    let cname = 'slideshow';
    if (className !== undefined) {
        cname += ` ${className}`;
    };

    return (
        <div className={cname}>
            
            <div className='slideshow__img'>
                {
                    pictures.map((img, index) => {
                        return (
                            <img key={index} src={img} alt={"slideshow picture " + index} style={{ opacity: index === currentlyShown ? 1 : 0 }} />
                        )
                    })
                }
            </div>
            {
                pictures.length > 1 &&
                <>
                    <button className='slideshow__left-btn' onClick={() => { changeImg(-1) }}><img src={arrowImg} alt="left arrow" /></button>
                    <button className='slideshow__right-btn' onClick={() => { changeImg(1) }}><img src={arrowImg} alt="right arrow" /></button>
                </>
            }
            <p className='slideshow__indicator'>{(currentlyShown + 1) + '/' + pictures.length}</p>
        </div>
    )
}
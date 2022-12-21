import { useState } from 'react'
import './Slideshow.scss'
import arrowImg from '../../assets/images/arrow.svg'

export default function Slideshow({pictures}) {
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

    return (
        <div className="slideshow large-block">
            <div className='slideshow__img' style={{ backgroundImage: `url(${pictures[currentlyShown]})`}} />
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
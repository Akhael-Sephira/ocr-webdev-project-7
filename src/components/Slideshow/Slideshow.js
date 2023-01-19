import { useId, useState } from 'react'
import './Slideshow.scss'
import arrowImg from './arrow.svg'

/**
 * Creates a slide show component.
 * @param pictures defines all the images of the slide show.
 * @param className defines additional css classes.
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

    let cssClasses = 'slideshow ' + (className || "");

    const panelId = useId();

    return (
        <section className={cssClasses} aria-label="carrousel d'images">
            
            <div className='slideshow__panel' id={panelId}>
                {
                    pictures.map((img, index) => {
                        const current = index === currentlyShown;
                        return (
                            <div role="group" 
                                aria-label={`diapositive ${index + 1} sur ${pictures.length}`}
                                style={{ opacity: current ? 1 : 0 }} 
                                aria-hidden={!current}
                                key={index} 
                            >
                                <img
                                    src={img} 
                                    alt=""
                                />
                            </div>
                        )
                    })
                }
            </div>
            {
                pictures.length > 1 &&
                <>
                    <button className='slideshow__left-btn' 
                        onClick={() => { changeImg(-1) }}
                        aria-controls={panelId}
                        aria-label="image précédente"
                    >
                        <img src={arrowImg} 
                            alt="" 
                        />
                    </button>
                    <button className='slideshow__right-btn' 
                        onClick={() => { changeImg(1) }}
                        aria-controls={panelId}
                        aria-label="image suivante"
                    >
                        <img src={arrowImg} 
                            alt="" 
                        />
                    </button>
                    <p className='slideshow__indicator'
                        aria-hidden="true"
                    >{(currentlyShown + 1) + '/' + pictures.length}</p>
                </>
            }
        </section>
    )
}
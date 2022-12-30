import './Banner.scss'

/**
 * Creates a banner component using @param image as the source image.
 * All @param children content will be inserted into an h1 child node.
 * @param className defines additional css classes.
 */
export default function Banner({ children, image, className }) {

    let bannerStyle = {
        backgroundImage: `url(${image})`
    }

    return (
        <div className={'banner large-block ' + className } style={bannerStyle}>
            { children && <h1 className='banner__title'>{children}</h1> }
        </div>
    )
}
import './Banner.scss'

/**
 * Creates a banner component using @param image as the source image.
 * All @param children content will be inserted into an h1 child node.
 * @param className defines additional css classes.
 */
export default function Banner({ children, image, className, h1=true }) {

    let bannerStyle = {
        backgroundImage: `url(${image})`
    }

    let cname = 'banner';
    if (className !== undefined) {
        cname += ` ${className}`;
    };

    return (
        <div className={cname} style={bannerStyle}>
            { children ? 
                h1 ? (
                    <h1 className='banner__title'>{children}</h1>
                ) : (
                    <p className='banner__title'>{children}</p> 
                ) 
                : ""
            }
        </div>
    )
}
import './Banner.scss'

/**
 * Creates a banner component.
 * 
 * @param title defines a text content to be displayed.
 * @param h1, if true will make the content of @param title into an <h1> node.
 * @param children's content will be inserted into a <picture> node and correspond to the banner's image.
 * @param className defines additional css classes.
 */
export default function Banner({ children, title, className, h1=true }) {

    let cname = 'banner';
    if (className !== undefined) {
        cname += ` ${className}`;
    };

    return (
        <div className={cname}>
            <picture>
                {children}
            </picture>
            { title ? 
                h1 ? (
                    <h1 className='banner__title'>{title}</h1>
                ) : (
                    <p className='banner__title'>{title}</p> 
                ) 
                : ""
            }
        </div>
    )
}
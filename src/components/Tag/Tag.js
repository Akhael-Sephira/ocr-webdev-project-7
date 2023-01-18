import './Tag.scss';

/**
 * Creates a simple tag component
 * @param children defines the content
 * @param className defines additional css classes.
 */
export default function Tag({ children, className }) {

    let cname = 'tag'; // Default classes of the component.
    if (className !== undefined) {
        cname += ` ${className}`;
    };

    return (
        <div className={cname}>
            {children}
        </div>)
}


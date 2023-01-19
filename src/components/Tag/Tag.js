import './Tag.scss';

/**
 * Creates a simple tag component
 * @param children defines the content
 * @param className defines additional css classes.
 */
export default function Tag({ children, className }) {

    let cssClasses = 'tag ' + (className || "");

    return (
        <div className={cssClasses}>
            {children}
        </div>)
}


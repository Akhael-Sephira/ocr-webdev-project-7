import './Tag.scss';

/**
 * Creates a simple tag component
 * @param children defines the content
 */
export default function Tag({ children, className }) {

    let cname = 'tag';
    if (className !== undefined) {
        cname += ` ${className}`;
    };

    return (
        <div className={cname}>
            {children}
        </div>)
}


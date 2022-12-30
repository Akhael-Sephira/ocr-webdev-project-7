import './Tag.scss';

/**
 * Creates a simple tag component
 * @param children defines the content
 */
export default function Tag({ children, className }) {
    return (<div className={'tag ' + className}>{children}</div>)
}


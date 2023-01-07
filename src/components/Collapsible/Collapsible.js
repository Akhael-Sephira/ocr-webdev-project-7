import './Collapsible.scss'

import { useState } from 'react'

/**
 * Creates a collapsible components.
 * @param summary defines the text always shown.
 * @param open defines the default state.
 * @param children defines the hidden content (inserted into a div).
 * @param className defines additional css classes.
 */
export default function Collapsible({ children, summary, className, open=false }) {
    const [openState, setOpenState] = useState(open);

    let cname = 'collapsible';
    if (className !== undefined) {
        cname += ` ${className}`;
    };

    return (
        <div className={cname} open={openState}>
            <div className='collapsible__summary' onClick={() => {setOpenState(!openState)}}>{summary}</div>
            <div className='collapsible__content'>{children}</div>
        </div>
    )
}

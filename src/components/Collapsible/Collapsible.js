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

    return (
        <div className={'collapsible ' + className} onClick={() => {setOpenState(!openState)}} open={openState}>
            <div className='collapsible__summary'>{summary}</div>
            { openState && <div className='collapsible__content'>{children}</div> }
        </div>
    )
}
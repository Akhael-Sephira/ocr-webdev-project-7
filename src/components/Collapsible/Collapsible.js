import './Collapsible.scss'

import { useState } from 'react'

export default function Collapsible({ children, summary, className, open=false }) {
    const [openState, setOpenState] = useState(open);

    return (
        <div className={'collapsible ' + className} onClick={() => {setOpenState(!openState)}} open={openState}>
            <div className='collapsible__summary'>{summary}</div>
            { openState && <div className='collapsible__content'>{children}</div> }
        </div>
    )
}
import './Collapsible.css'

import { useState } from 'react'

export default function Collapsible({ children, summary, className, open=false }) {
    const [openState, setOpenState] = useState(open);

    return (
        <div className={'collapsible ' + className} onClick={() => {setOpenState(!openState)}} open={openState}>
            <div className='summary'>{summary}</div>
            { openState && <div className='content'>{children}</div> }
        </div>
    )
}
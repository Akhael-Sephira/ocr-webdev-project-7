import './Collapse.css'

// export default function Collapse({ children, summary, className }) {
//     return (
//         <details className={'collapsible ' + className}>
//             <summary className='summary'>{summary}</summary>
//             <div className='content'>{children}</div>
//         </details>
//     )
// }

import { useState } from 'react'

export default function Collapse({ children, summary, className, open=false }) {
    const [openState, setOpenState] = useState(open);

    return (
        <div className={'collapsible ' + className} onClick={() => {setOpenState(!openState)}} open={openState}>
            <div className='summary'>{summary}</div>
            { openState && <div className='content'>{children}</div> }
        </div>
    )
}
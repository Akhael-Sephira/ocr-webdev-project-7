import './Collapsible.scss'

import { useState, useId, useEffect } from 'react'

/**
 * Creates a collapsible components.
 * @param summary defines the text always shown.
 * @param open defines the default state.
 * @param children defines the hidden content (inserted into a div).
 * @param className defines additional css classes.
 */
export default function Collapsible({ children, summary, className, open=false }) {
    const [openState, setOpenState] = useState(open);

    const idHeader = useId();
    const idPanel = useId();

    let cname = 'collapsible';
    if (className !== undefined) {
        cname += ` ${className}`;
    };

    useEffect(() => {

        setPanelHeight();
        
        /** Set the height of the panel depending on the extended state of the collapsible */
        function setPanelHeight() {
            const panel = document.getElementById(idPanel);
            if(!openState) {
                panel.style.height = "0px";
            } else {
                panel.style.height = (panel.scrollHeight) + "px";
            }
        }
    });

    return (
        <div className={cname} open={openState}>
            <button id={idHeader}
                    className='collapsible__header' 
                    onClick={() => { setOpenState(!openState) }}  
                    aria-expanded={openState}
                    aria-controls={idPanel}
            >
                {summary}
            </button>
            <div id={idPanel}
                 className='collapsible__panel'
                 aria-labelledby={idHeader}
                 aria-hidden={!openState}
                 inert={openState ? undefined : ""}
            >
                {children}
            </div>
        </div>
    )
}

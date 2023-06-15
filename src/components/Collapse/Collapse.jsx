import React, { useState } from 'react';
import './Collapse.css';

function Collapse ({name, children}) {
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);

    return <div className='collapse'>
        <div
            onClick={() => setIsCollapseOpen(isCollapseOpen => !isCollapseOpen)}
            className='collapseHeader'
        >
            <h4 className='title-collapse'>{name}</h4>
            <div className='div-icon'>
                <i className={isCollapseOpen ? 'fas fa-chevron-down' : 'fas fa-chevron-up'}></i>
            </div>
        </div>
        {isCollapseOpen && <div className='collapseBody'><p>{children}</p></div>}
    </div>
}

export default Collapse;
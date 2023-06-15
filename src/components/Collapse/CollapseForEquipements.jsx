import React, { useState } from 'react';
import './Collapse.css';

function CollapseForEquipements ({name, children}) {
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
        {isCollapseOpen && <div className='collapseBody'>
            {children.map((children, index) => {
                return <p key={index}>{children}</p>
        })}</div>}
        </div>
}

export default CollapseForEquipements;

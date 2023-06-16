import React, { useState } from 'react';
import './Collapse.css';

function CollapseForEquipements ({name, children}) {
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);
    const [isDown, setIsDown] = useState(false);

    const handleClick = () => {
        setIsDown(!isDown);
    };

    return <div className='collapse'>
        <div className='collapseHeader'>
            <h4 className='title-collapse'>{name}</h4>
            <div onClick={() => setIsCollapseOpen(isCollapseOpen => !isCollapseOpen)}>
                <div className='div-icon'>
                    <div className={`fas fa-chevron-up rotate ${isDown ? 'down' : ''}`} onClick={handleClick}></div>
                </div>
            </div>
        </div>
        {isCollapseOpen && <div className='collapseBody'>
            {children.map((children, index) => {
                return <p key={index}>{children}</p>
        })}</div>}
        </div>
}

export default CollapseForEquipements;

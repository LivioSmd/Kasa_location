import React from 'react';
import "../../Styles/Collapse.scss"
import { useCollapse } from "react-collapsed"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


function CollapseEquipements({equip}) {
    const { getCollapseProps, getToggleProps} = useCollapse();
return (
    <div className="collapsible">
        <div className="header-collapse">
            <h4 className="title-collapse">Équipements</h4>
            <FontAwesomeIcon icon={faChevronUp} id='icon-collapse' {...getToggleProps()}/>
        </div>
        <div className='collaspe-content' {...getCollapseProps()}>
            <ul className="content">
                {equip.map((datas) => {
                    return <li>{datas}</li>;
                })}
            </ul>
        </div>
    </div>
    );
}

export default CollapseEquipements;

import React from 'react';
import "../../Styles/Collapse.scss"
import { useCollapse } from "react-collapsed"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


function CollapseEquipements({equip}) {
    const { getCollapseProps, getToggleProps} = useCollapse();
return (
    <div className="collapsible">
        <div className="header-collapse" {...getToggleProps()}>
            <h4 className="title-collapse">Équipements</h4>
            <FontAwesomeIcon icon={faChevronUp} id='icon-collapse'/>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
            {equip.map((datas) => {
                return <p>{datas}</p>})}
            </div>
        </div>
    </div>
    );
}

export default CollapseEquipements;

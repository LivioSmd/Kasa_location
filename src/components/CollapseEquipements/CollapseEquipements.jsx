import React from 'react';
import "../../Styles/Collapse.scss"
import { useCollapse } from "react-collapsed"; 

function CollapseEquipements({equip}) {
    const { getCollapseProps, getToggleProps} = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            <p>Équipements</p>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {equip}
            </div>
        </div>
    </div>
    );
}

export default CollapseEquipements;

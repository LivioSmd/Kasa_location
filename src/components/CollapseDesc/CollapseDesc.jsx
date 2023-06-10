import "../../Styles/Collapse.scss"
import { useCollapse } from "react-collapsed"; 


function CollapseDesc({desc}) {
    const { getCollapseProps, getToggleProps} = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            <p>Description</p>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {desc}
            </div>
        </div>
    </div>
    );
}

export default CollapseDesc;


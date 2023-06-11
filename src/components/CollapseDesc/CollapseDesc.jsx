import "../../Styles/Collapse.scss"
import { useCollapse } from "react-collapsed"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function CollapseDesc({desc}) {
    const { getCollapseProps, getToggleProps} = useCollapse();
return (
    <div className="collapsible">
        <div className="header-collapse" {...getToggleProps()}>
            <h4 className="title-collapse">Description</h4>
            <FontAwesomeIcon icon={faChevronUp} id='icon-collapse'/>
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


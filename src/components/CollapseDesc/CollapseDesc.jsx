import "../../Styles/Collapse.scss"
import { useCollapse } from "react-collapsed"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


function CollapseDesc({title, desc}) {
    const { getCollapseProps, getToggleProps} = useCollapse();
return (
    <div className="collapsible">
        <div className="header-collapse">
            <h4 className="title-collapse">{title}</h4>
            <FontAwesomeIcon icon={faChevronUp} id='icon-collapse' {...getToggleProps()}/>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                <p className="p-desc">{desc}</p>
            </div>
        </div>
    </div>
    );
}

export default CollapseDesc;


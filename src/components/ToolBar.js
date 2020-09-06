import React from "react";
import { MdSearch, MdAdd } from "react-icons/md";

const IconStyle = {
  fontSize: "24px",
  marginRight: "5px",
  cursor: "pointer",
};

function Toolbar(props) {
  return (
    <div className="TodoApp__toolbar_wrapper">
      <div className="TodoApp__icon_group">
        <MdAdd onClick={props.toggleToAdd} style={IconStyle} />
        <MdSearch onClick={props.toggleToSearch} style={IconStyle} />
        <span
          style={{
            borderLeft: "1px solid #CCC",
            paddingLeft: "15px",
            marginLeft: "10px",
          }}
        >
          3 items left
        </span>
      </div>
      <div className="TodoApp__button_group">
        <div className={"TodoApp__button_border"}>All</div>
        <div className={""}>Incomplete</div>
        <div className={""}>Completed</div>
      </div>
    </div>
  );
}

export default Toolbar;

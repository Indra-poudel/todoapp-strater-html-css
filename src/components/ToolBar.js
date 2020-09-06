import React from "react";
import { MdSearch, MdAdd } from "react-icons/md";

import { ButtonTypes } from "../constants/constants";

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
          {props.itemsLeft}items left
        </span>
      </div>
      <div className="TodoApp__button_group">
        <div
          onClick={props.onClickAll}
          className={
            props.selectedButton === ButtonTypes.ALL
              ? "TodoApp__button_border"
              : ""
          }
        >
          All
        </div>
        <div
          onClick={props.onClickIncomplete}
          className={
            props.selectedButton === ButtonTypes.INCOMPLETE
              ? "TodoApp__button_border"
              : ""
          }
        >
          Incomplete
        </div>
        <div
          onClick={props.onClickCompleted}
          className={
            props.selectedButton === ButtonTypes.COMPLETE
              ? "TodoApp__button_border"
              : ""
          }
        >
          Completed
        </div>
      </div>
    </div>
  );
}

export default Toolbar;

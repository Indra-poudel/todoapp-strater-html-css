import React from "react";

import { INPUT_TYPES } from "../constants/constants";

function InputHandler(props) {
  switch (props.types) {
    case INPUT_TYPES.SEARCH:
      return (
        <input
          onChange={props.onSearch}
          className="TodoApp__input"
          value={props.value}
          placeholder={props.searchPlaceholder}
        />
      );
    case INPUT_TYPES.ADD:
    default:
      return (
        <input
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          className="TodoApp__input"
          value={props.value}
          placeholder={props.addPlaceholder}
        />
      );
  }
}

export default InputHandler;

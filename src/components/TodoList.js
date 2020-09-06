import React from "react";

function TodoList(props) {
  return (
    <div className="TodoApp_list_wrapper">
      <div className="TodoApp__list">
        <input className={"TodoApp__checkbox"} type="checkbox" />
        <span className="TodoApp_completed_task">fdsa</span>
      </div>
      <div className="TodoApp__list">
        <input className={"TodoApp__checkbox"} type="checkbox" />
        <span className="">fdsafa</span>
      </div>
    </div>
  );
}

export default TodoList;

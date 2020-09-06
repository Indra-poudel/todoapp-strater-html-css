import React from "react";
import { ButtonTypes } from "../constants/constants";

function TodoList(props) {
  let list;
  const { todoList, listType } = props;

  if (listType === ButtonTypes.COMPLETE) {
    list = todoList.filter((todo) => todo.isCompleted === true);
  } else if (listType === ButtonTypes.INCOMPLETE) {
    list = todoList.filter((todo) => todo.isCompleted === false);
  } else list = todoList.map((todo) => todo);

  return (
    <div className="TodoApp_list_wrapper">
      {list.map((todo) => (
        <div key={todo.id} className="TodoApp__list">
          <input
            className={"TodoApp__checkbox"}
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => props.onChecked(todo.id)}
          />
          <span className={todo.isCompleted ? "TodoApp_completed_task" : ""}>
            {todo.task}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

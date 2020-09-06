import React, { Component } from "react";

import "./todo-app.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import InputHandler from "./components/inputHandler";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp__wrapper">
        <div className="TodoApp__component">
          <Header />
          <InputHandler />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default TodoApp;

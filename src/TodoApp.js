import React, { Component } from "react";

import "./todo-app.css";
import Header from "./components/Header";
import Toolbar from "./components/ToolBar";
import TodoList from "./components/TodoList";
import InputHandler from "./components/inputHandler";
import { INPUT_TYPES, ButtonTypes } from "./constants/constants";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputType: INPUT_TYPES.ADD,
      inputText: "",
      todoList: [
        {
          id: 1,
          task: "Go to Hospital",
          isCompleted: false,
        },
        {
          id: 2,
          task: "Go to School",
          isCompleted: true,
        },
      ],
      filterList: [],
      selectedButton: ButtonTypes.ALL,
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      filterList: this.state.todoList.map((todo) => todo),
    });
  }

  onChecked = (id) => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map((todo) => {
        if (todo.id === id)
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        return todo;
      }),
      filterList: this.state.filterList.map((todo) => {
        if (todo.id === id)
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        return todo;
      }),
    });
  };

  onTextChange = (event) => {
    this.setState({
      ...this.state,
      inputText: event.target.value,
    });
  };

  onPressEnter = (event) => {
    event.key === "Enter" &&
      this.state.inputText.trim() !== "" &&
      this.setState({
        ...this.state,
        todoList: [
          ...this.state.todoList,
          {
            id: this.state.todoList.length + 1,
            task: this.state.inputText,
            isCompleted: false,
          },
        ],
        inputText: "",
      });
  };

  onSearch = (event) => {
    this.setState({
      ...this.state,
      inputText: event.target.value,
      filterList: this.state.todoList.filter((todo) =>
        todo.task
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase())
      ),
    });
  };

  getItemLeft = () =>
    this.state.todoList.filter((todo) => todo.isCompleted === false).length;

  onClickAdd = () => {
    this.setState({
      ...this.state,
      inputText: "",
      inputType: INPUT_TYPES.ADD,
    });
  };

  onClickSearch = () => {
    this.setState({
      ...this.state,
      inputText: "",
      inputType: INPUT_TYPES.SEARCH,
      filterList: this.state.todoList.map((todo) => todo),
    });
  };

  render() {
    return (
      <div className="TodoApp__wrapper">
        <div className="TodoApp__component">
          <Header title="THINGS TO DO" />
          <InputHandler
            onChange={this.onTextChange}
            onSearch={this.onSearch}
            onKeyDown={this.onPressEnter}
            value={this.state.inputText}
            addPlaceholder="Add New"
            searchPlaceholder="Search"
            types={this.state.inputType}
          />
          <TodoList
            todoList={
              this.state.inputType === INPUT_TYPES.ADD
                ? this.state.todoList
                : this.state.filterList
            }
            onChecked={this.onChecked}
            listType={this.state.selectedButton}
          />
        </div>
        <Toolbar
          toggleToAdd={this.onClickAdd}
          toggleToSearch={this.onClickSearch}
          itemsLeft={`${this.getItemLeft()} `}
          selectedButton={this.state.selectedButton}
          onClickAll={() => {
            this.setState({
              ...this.state,
              selectedButton: ButtonTypes.ALL,
            });
          }}
          onClickIncomplete={() => {
            this.setState({
              ...this.state,
              selectedButton: ButtonTypes.INCOMPLETE,
            });
          }}
          onClickCompleted={() => {
            this.setState({
              ...this.state,
              selectedButton: ButtonTypes.COMPLETE,
            });
          }}
        />
      </div>
    );
  }
}

export default TodoApp;

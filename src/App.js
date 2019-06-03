import React from "react";
import TodoComponent from "./components/TodoComponents/Todo";
import localStorageHelper from "./localStorageHelper";
import uuid from "uuid";

const initialTodoList = [
  {
    id: uuid(),
    task: "Click on me and click Clear Completed Tasks",
    completed: false
  },
  {
    id: uuid(),
    task: "Clear All will delete all tasks, even completed ones",
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todoList: localStorageHelper.getInitialObject("state", initialTodoList),
      newTodoTask: ""
    };
  }
  updateComponent() {
    this.setState(state => {
      localStorageHelper.updateLocalStorage("state", state.todoList);
    });
  }
  /** Updates input on keypress**/
  changeHandler = e => {
    this.setState({
      newTodoTask: e.target.value
    });
  };

  /** invokes addTask() on Enter keypress**/
  enterHandler = e => (e.key === "Enter" ? this.addTask() : null);

  /** adds a new object to the array **/
  addTask = () => {
    this.setState(state => {
      const newTodoItem = {
        id: uuid(),
        task: state.newTodoTask === "" ? "Nothing bro" : this.state.newTodoTask,
        completed: false
      };

      const newTodoList = state.todoList.concat(newTodoItem);

      return {
        todoList: newTodoList,
        newTodoTask: ""
      };
    });

    this.updateComponent();
  };

  /** Clears every object to witch it's completion state is true **/
  clearCompleted = () => {
    this.setState(state => ({
      todoList: state.todoList.filter(item => item.completed === false)
    }));

    this.updateComponent();
  };

  /** Removes every item from todo list **/
  clearAll = () => {
    this.setState(state => {
      return {
        todoList: []
      };
    });

    localStorageHelper.clearLocalStorage("state");
  };

  /** Toggles the completion state of the element being clicked to false and true **/
  toggleCompleted = id => {
    const updateState = list => {
      this.setState(state => {
        return {
          todoList: list
        };
      });
    };

    let newTodoList = this.state.todoList.slice();

    newTodoList = newTodoList.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        return updateState(newTodoList);
      } else {
        return updateState(newTodoList);
      }
    });

    this.updateComponent();
  };

  /* renders the component */
  render() {
    return (
      <TodoComponent
        newToDo={this.state.newTodoTask}
        toDoList={this.state.todoList}
        addTask={this.addTask}
        clearCompleted={this.clearCompleted}
        changeHandler={this.changeHandler}
        enterHandler={this.enterHandler}
        toggleCompleted={this.toggleCompleted}
        clearAll={this.clearAll}
      />
    );
  }
}

export default App;

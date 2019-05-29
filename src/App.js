import React from 'react';
import TodoComponent from './components/TodoComponents/Todo'

const initialTodoList = [];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props){
    super(props)
    this.state = {
      todoList: initialTodoList,
      newTodoTask: "",
    }
  }
  changeHandler = (e) => {
    this.setState({
      newTodoTask: e.target.value,
    });
  }

  enterHandler =  (e) => {
    if(e.key === "Enter"){
      this.addTodo()
    }
  }

  addTodo = () => {
    const newTodoItem = {
      id: Date.now(),
      task: this.state.newTodoTask,
      completed: false,
    }

    const newTodoList = this.state.todoList.concat(newTodoItem)

    this.setState({
      todoList: newTodoList,
      newTodoTask: "",
    })
  }

  clearCompleted = () => {
    
  }
  render() {
    return (
      <TodoComponent 
        newToDo={this.state.newTodoTask}
        toDoList={this.state.todoList}
        addTodo={this.addTodo}
        clearCompleted={this.clearCompleted}
        changeHandler={this.changeHandler}
        enterHandler={this.enterHandler}
      />
    );
  }
}

export default App;

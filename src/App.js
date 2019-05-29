import React from 'react';
import TodoComponent from './components/TodoComponents/Todo'

const initialTodoList = [
    {
    id: Date.now(), 
    task: "Clean out the closet", 
    completed: false
    },
  ];

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
      this.addTask()
    }
  }

  addTask = () => {
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

  toggleCompleted = id => {

    const updateState = list => {
      this.setState({
        todoList: list,
      })
    }

    let newTodoList = this.state.todoList.slice()

    newTodoList = newTodoList.map( item => {
      if(item.id === id){
        item.completed = !item.completed;
        return updateState(newTodoList)
      }else{
        return updateState(newTodoList)
      }
    })
   
  }

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
      />
    );
  }
}

export default App;

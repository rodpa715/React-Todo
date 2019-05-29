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
  /** Updates input on keypress**/
  changeHandler = (e) => {
    this.setState({
      newTodoTask: e.target.value,
    });
  }
  /** invokes addTask() on Enter keypress**/
  enterHandler =  (e) => e.key === "Enter" ? this.addTask() : null
  
  /** adds a new object to the array **/
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
  
  /** Clears every object to witch it's completion state is true **/
  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => item.completed === false)
    })
  }

  /** Toggles the completion state of the element being clicked to false and true **/
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
      />
    );
  }
}

export default App;

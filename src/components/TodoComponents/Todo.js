import React from 'react';
import "./Todo.css"
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default function TodoComponent(props) {
  const {
    toDoList,
    newToDo,
    addTask,
    clearCompleted,
    changeHandler,
    enterHandler,
    toggleCompleted,
  } = props;

  return(
    <div className="todo-app">
      <h1>REACT TODO LIST</h1>
      <TodoForm 
        newToDo={newToDo}
        addTask={addTask}
        clearCompleted={clearCompleted}
        changeHandler={changeHandler}
        enterHandler={enterHandler}
      />
      <h2>Things I still have to do :</h2>
      <TodoList toDoList={toDoList} toggleCompleted={toggleCompleted}/>
    </div>
  )
}
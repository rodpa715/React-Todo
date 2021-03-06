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
    clearAll,
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
        clearAll={clearAll}
      />
      <h2>Things I still have to do :</h2>
      <TodoList toDoList={toDoList} toggleCompleted={toggleCompleted}/>
      <a className="author" href="https://github.com/rodpa715/React-Todo" target="_blank" rel="noopener noreferrer">Created by Patrick Rodrigues</a>
    </div>
  )
}
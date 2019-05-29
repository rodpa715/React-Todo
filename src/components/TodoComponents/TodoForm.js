import React from 'react';

export default function TodoForm(props) {
  const {newToDo, addTask, clearCompleted, changeHandler, enterHandler} = props;
  return(
    <div className="user-input">
      <input 
        className="user-input input"
        value={newToDo} onChange={changeHandler}
        onKeyPress={enterHandler}
        type="text"
      />
      <button className="user-input add" onClick={addTask} >Add Task</button>
      <button className="user-input clear" onClick={clearCompleted} >Clear Completed Tasks</button>
    </div>
  )
}
import React from 'react';

export default function TodoForm(props) {
  const {newToDo, addTask, clearCompleted, changeHandler, enterHandler, clearAll} = props;
  return(
    <div className="user-input">
      <input 
        className="user-input input"
        value={newToDo} onChange={changeHandler}
        onKeyPress={enterHandler}
        type="text"
        placeholder="What do you need to do?"
      />
      <button className="user-input add" onClick={addTask} >Add Task</button>
      <button className="user-input clear" onClick={clearCompleted} >Clear Completed Tasks</button>
      <button className="user-input clearAll" onClick={clearAll} >Clear All</button>
    </div>
  )
}
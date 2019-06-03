import React from 'react';

export default function TodoList(props) {
  const {toDoList, toggleCompleted,} = props;
  return(
    <ol className="todo-list">
      {
        toDoList.map(todo => {
        return (
        <li 
          data-state={todo.completed}
          onClick={() => toggleCompleted(todo.id)}
          key={todo.id}
        >
          {todo.task}
        </li>
        )
      })
      }
    </ol>
  )
}
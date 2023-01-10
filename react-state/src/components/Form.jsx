import React from 'react'

export default function Form() {
  return (
    <div>
      <input type="text" placeholder="Enter todo list..." className="task-input"></input>
      <button className='button-add' type='submit'>Add</button>
    </div>
  )
}

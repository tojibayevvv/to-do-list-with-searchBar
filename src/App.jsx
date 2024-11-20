import React from 'react'
import Wrapper from './components/todowrapper'
import TodoList from './components/todoList'

const App = () => {
  return (
    <div className='container'>
      <TodoList/>
      <Wrapper/>
    </div>
  )
}

export default App
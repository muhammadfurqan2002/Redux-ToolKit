import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import { Provider } from 'react-redux'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AddTodo></AddTodo>
        <Todo></Todo>
    </>
  )
}

export default App

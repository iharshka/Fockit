import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'
import { CreateTodo } from './components/CreateTodoTemp'

function App() {
  const [todos, setTodos] = useState([])

  // fetch("http://localhost:3000/todos")
  // .then(async function(res) {
  //   const response = await res.json();
  //   setTodos(response.todos)
  // })

  return (
    <>
    <CreateTodo />
    <Todos todos={todos} />
    </>
  )
}

export default App

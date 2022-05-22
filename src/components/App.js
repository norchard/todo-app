import { useState, useEffect } from 'react'
import './App.css'
import Todo from './Todo'
import Input from './Input'

const uuid = require('uuid')

function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'))
    return localTodos || []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const submitHandler = (e) => {
    e.preventDefault() // prevent page reload, which is default behavior after form submit press
    if(text.length === 0){
      alert('Write something!')
      return
    }
    const newTodo = { id: uuid.v4(), name: text, checked: false } // generate unique id for each todo
    let updatedTodos = todos.slice() // don't mutate the original state
    updatedTodos.push(newTodo) // add the new todo
    setTodos(updatedTodos) // set new state - clean
    setText('') // set clean slate for input text field
  }

  const onChange = (e) => setText(e.target.value)

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const switchCheck = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ) // change todo.check only on todo with specified id
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <body className="App-body">
        <h1 className='title'>Todo List</h1>
        <Input
          submitHandler={submitHandler}
          inputValue={text}
          onChange={onChange}
        />
        <ul className='todos'>
          { todos.map(todo =>
            <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            checked={todo.checked}
            deleteTodo={ deleteTodo }
            switchCheck={ switchCheck }
            />)
          }
        </ul>
      </body>
    </div>
  );
}

export default App;

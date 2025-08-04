import { useState } from "react"
import Todo from "./components/Todo"

const App = (props) => {
  const [showAll, setShowAll] = useState(true)
  const [todos, setTodos] = useState(props.todos)
  const [newTodo, setNewTodo] = useState("")
  const filteredTodos = showAll
    ? todos
    : todos.filter((todo) => !todo.isComplete)

  const toggle = (id) => {
    const todo = todos.find((todo) => String(todo.id) === String(id))
    const toggledTodo = { ...todo, isComplete: !todo.isComplete }
    setTodos(todos.map((t) => (t.id == toggledTodo.id ? toggledTodo : t)))
  }
  const addTodo = () => {
    setTodos([
      {
        id: todos.length,
        content: newTodo,
        isComplete: false,
      },
      ...todos,
    ])
    setNewTodo("")
  }
  return (
    <>
      <div>
        <h1>Reminders</h1>
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "hide completed" : "show all"}
          </button>
        </div>
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={addTodo}>Add</button>
        <ul>
          {filteredTodos.map((todo) => (
            <Todo
              toggle={() => toggle(todo.id)}
              content={todo.content}
              isComplete={todo.isComplete}
            />
            // <li
            //   key={todo.id}
            //   // style={{
            //   //   display: "flex",
            //   //   alignItems: "center",
            //   //   gap: "0.5em",
            //   //   padding: "4px 0",
            //   // }}
            // >
            //   <input
            //     type="checkbox"
            //     checked={todo.isComplete}
            //     onChange={() => toggle(todo.id)}
            //     // style={{ width: "16px", height: "16px", borderRadius: "50%" }}
            //   />
            //   {todo.content}
            // </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

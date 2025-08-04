import { useState } from "react"

const createInitialTodos = () => {
  const initialTodos = []
  for (let i = 0; i < 3; i++) {
    initialTodos.push({ id: i, text: "Item " + (i + 1), isComplete: false })
  }
  return initialTodos
}

const App = () => {
  const [showAll, setShowAll] = useState(true)
  const [todos, setTodos] = useState(createInitialTodos)
  const [text, setText] = useState("")
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
        text: text,
        isComplete: false,
      },
      ...todos,
    ])
    setText("")
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
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add</button>
        <ul>
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              // style={{
              //   display: "flex",
              //   alignItems: "center",
              //   gap: "0.5em",
              //   padding: "4px 0",
              // }}
            >
              <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => toggle(todo.id)}
                // style={{ width: "16px", height: "16px", borderRadius: "50%" }}
              />
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

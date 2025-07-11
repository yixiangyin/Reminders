import { useState } from "react";

const createInitialTodos = () => {
  const initialTodos = [];
  for (let i = 0; i < 10; i++) {
    initialTodos.push({ id: i, text: "Item " + (i + 1) });
  }
  return initialTodos;
};

const App = () => {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>Reminders</h1>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button
          onClick={() => {
            setText("");
            setTodos([
              {
                id: todos.length,
                text: text,
              },
              ...todos,
            ]);
          }}
        >
          Add
        </button>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;

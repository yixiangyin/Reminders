import { useState } from "react";

const createInitialTodos = () => {
  const initialTodos = [];
  for (let i = 0; i < 10; i++) {
    initialTodos.push({ id: i, text: "Item " + (i + 1) });
  }
  return initialTodos;
};

const App = () => {
  const [ todos, setTodos ] = useState(createInitialTodos);
  return (
    <>
      <div>
        <h1>Reminders</h1>
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

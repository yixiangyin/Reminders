import { createRoot } from "react-dom/client"

import App from "./App.jsx"

const todos = [
  {
    id: 1,
    content: "study finance",
    isComplete: false,
  },
  {
    id: 2,
    content: "get milk",
    isComplete: true,
  },
  {
    id: 3,
    content: "cook",
    isComplete: false,
  },
]

createRoot(document.getElementById("root")).render(<App todos={todos}/>)

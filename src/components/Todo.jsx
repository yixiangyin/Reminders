const Todo = ({ isComplete, content, toggle }) => {
  return (
    <li>
      <input type="checkbox" checked={isComplete} onChange={toggle} />
      {content}
    </li>
  )
}
export default Todo

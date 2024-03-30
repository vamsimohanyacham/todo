// Write your code here
import './index.css'

const TodoItem = props => {
  const {lists, deleteTodo} = props
  const {id, title} = lists

  onchange = () => {
    deleteTodo(id)
  }

  return (
    <li className="aa">
      <div className="bb">
        <p>{title}</p>
      </div>
      <div className="cc">
        <button type="button" onClick={onchange}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem

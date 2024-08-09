import { useDispatch } from "react-redux"
import { removeTodo, toogleTodoComplete } from "../store/todoSlice"

export const TodoItem = ({ id, text, complited }) => {
  const dispatch = useDispatch()

  return (
    <li>
      <input type="checkbox" checked={complited} onChange={() => dispatch(toogleTodoComplete({ id }))} />
      <span>{text}</span>
      <span className='delete' onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
    </li>
  )
}
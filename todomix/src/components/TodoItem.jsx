import { useDispatch } from "react-redux"
import { fetchDeleteTodo, fetchToogleStatus } from "../store/todoSlice"


export const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch()

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={() => dispatch(fetchToogleStatus(id))} />
      <span>{title}</span>
      <span className='delete' onClick={() => dispatch(fetchDeleteTodo(id))}>&times;</span>
    </li>
  )
}
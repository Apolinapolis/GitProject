import { useDispatch } from "react-redux"
import { removeTodo } from "../store/todoSlice"

export const TodoItem = ({id, text, complited , toogle}) => {
  const dispatch = useDispatch()

    return  (
    <li>
      <input type="checkbox" checked={complited} onChange={() => toogle(id)} />
      <span>{text}</span>
      <span className='delete' onClick={() => dispatch(removeTodo({id}))}>&times;</span>
  </li>
    ) 
}
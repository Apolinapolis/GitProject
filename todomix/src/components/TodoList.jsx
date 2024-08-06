import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"

export const Todolist = () => {
    const todos = useSelector(state => state.todos.todos)
    return (
        <ul>
            {todos.map((item) => (
                <TodoItem key={item.id} {...item} />
            ))}
        </ul>
    )
}
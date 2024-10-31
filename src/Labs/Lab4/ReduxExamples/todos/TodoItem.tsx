import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({todo}: {todo:{id: string; title: string}}) {
  const dispath = useDispatch();
  return (
    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
      {todo.title}
      <div className="mx-3">
        <button onClick={() => dispath(setTodo(todo))}
          id="wd-set-todo-click"
          className="btn btn-danger mx-3">
          Edit 
        </button>
        <button onClick={() => dispath(deleteTodo(todo.id))}
          id="wd-delete-todo-click" 
          className="btn btn-primary me-2"> 
          Delete 
        </button>
        
      </div>
      
    </li>
  );
}

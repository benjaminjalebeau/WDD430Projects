export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    //Component for todo item information, checkbox toggle and delete button.
    return (
        <li>
        <label>
          <input 
            type="checkbox" 
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)} 
          />
          {title}
        </label>
        <button 
            className="btn btn-danger" 
            onClick={() => deleteTodo(id)}
        >Remove</button>
      </li>
    )

}
import { TodoItem } from "./TodoItem"

export function TodoList( {todos, toggleTodo, deleteTodo} ) {

    //This component is a list of todoItem components.
    return (
    <ul className="list">
      {todos.length === 0 && "Don't be Lazy, add something"}
      {todos.map(todo => {
        return <TodoItem 
            {...todo} 
            key={todo.id} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo}
        />
      })}
      
    </ul>
    )
}
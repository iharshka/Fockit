export function Todos({todos}) {
    return <>
    <div>
        {todos.map(function(todo) {
            return <div>
            <h2>Title: {todo.title}</h2>
            <h4>Description: {todo.description}</h4>
            <button>{todo.completed == true ? "Completed" : "Mark as done"}</button>
            </div>
        })}
    </div>
    </>
}
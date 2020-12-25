import Todo from './todo'

export default ({ state, set }) => {
  const { todos, show } = state
  const complete = todos.filter(todo => todo.done === true)
  
  return (
    <div>
      {complete.length ? (
        <button className="btn complete" onClick={() => set('show', !show)}>
          {show ? (
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
            ) : (
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          )}
          Selesai ({complete.length})
        </button>
      ) : ''}

      {complete.length && show ? (
        <ul>
          {complete.map(todo => (
            <Todo state={state} set={set}>{todo}</Todo>
          ))}
        </ul>
      ) : ''}
    </div>
  )
}
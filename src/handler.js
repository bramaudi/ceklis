const syncStorage = (todos) => {
  window.localStorage.setItem('todos', JSON.stringify(todos))
}

export const handleAdd = ({ todos, text }, set, e) => {
  if (e.key === 'Enter') {
    const fresh = [...todos, {
      id: new Date().getTime(),
      text,
      done: false
    }]
    set('todos', fresh)
    syncStorage(fresh)
    set('text', '')
  }
}

export const handleToggle = (set, todos, id) => {
  const fresh = todos.map(todo => {
    if (todo.id === id) {
      todo.done = !todo.done
    }
    return todo
  })
  set('todos', fresh)
  syncStorage(fresh)
}

export const handleDelete = (set, todos, id) => {
  const fresh = todos.filter(n => n.id !== id)
  set('todos', fresh)
  syncStorage(fresh)
}

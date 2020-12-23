<script>
  import { todos, sync } from '../store.js'
  export let isDone = true

  $: pending = $todos.filter(todo => todo.done === false)
	$: complete = $todos.filter(todo => todo.done === true)

  const handleToggle = (id) => {
    const toggled = $todos.map(todo => {
			if (todo.id === id) {
				todo.done = !todo.done
      }
      return todo
    })
    todos.set(toggled)
    sync($todos)
	}

	const handleDelete = (id) => {
    todos.update(todos => todos.filter(todo => todo.id !== id))
    sync($todos)
	}
</script>

<ul>
  {#each (isDone ? complete : pending) as todo}
    <li class="todo">
      {#if todo.done}
        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
        <strike>{todo.text}</strike>
      {:else}
        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
        {todo.text}
      {/if}
    
      <div class="actions">
        <button
          class="btn {todo.done ? 'gray' : 'green'}"
          on:click={handleToggle(todo.id)}
          >
          {#if todo.done}
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"></path></svg>
          {:else}
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          {/if}
        </button>
    
        <button class="btn red" on:click={handleDelete(todo.id)}>
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </div>
    </li>
  {/each}
</ul>
import { m, render } from 'minite'
import Header from './components/header'
import Textbox from './components/textbox'
import Todo from './components/todo'
import Empty from './components/empty'
import Completed from './components/completed'

window.m = m  

const localTodos = window.localStorage.getItem('todos')

const state = {
  text: '',
  todos: JSON.parse(localTodos || '[]'),
  show: false
}

const view = (state, set) => {
  const { todos } = state
  const pending = todos.filter(todo => todo.done === false)
  const complete = todos.filter(todo => todo.done === true)

  return (
    <>
      <Header complete={complete} pending={pending}>Ceklis</Header>
      <Textbox state={state} set={set} />

      {todos.length ? (
        (pending.length) ? (
          <ul>
            {pending.map(todo => (
              <Todo state={state} set={set}>{todo}</Todo>
            ))}
          </ul>
        ) : (
          <Empty text="Yey, udah beres!">ᕙ(`▿´)ᕗ</Empty>
        )
      ) : ''}

      <Completed state={state} set={set} />

      {todos.length ? '' : <Empty text="Hm, masih kosong!">ʕ•́ᴥ•̀ʔっ</Empty>}
    </>
  )
}

render(document.body, view, state)

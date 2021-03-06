import { handleAdd } from '../handler'

export default ({ state, set }) => {
  const { text } = state
  
  return (
    <input
      id="inputTodo"
      className="textbox"
      type="text"
      value={text}
      placeholder="Ok, ketik disini ya"
      onChange={e => set('text', e.target.value)}
      onKeyUp={e => handleAdd(state, set, e)}
      />
  )
}
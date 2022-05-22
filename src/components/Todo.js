import './Todo.css'
import { FiTrash2 } from 'react-icons/fi'

function Todo(props) {
  return(
    <label
      className={'checkContainer ' + (props.checked ? 'checked' : '')}>
      <input
        type='checkbox'
        className='ghostCheckBox'
        checked={props.checked}
        onChange={(e) => {props.switchCheck(props.id)}}
      />
      <span className='checkBox'></span>
      {props.name}
      <button
        className='deleteButton'
        value='delete'
        onClick={(e) => { props.deleteTodo(props.id) }}>
        < FiTrash2 />
      </button>
    </label>
  )
}

export default Todo;

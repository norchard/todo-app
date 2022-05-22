import './Input.css'
import { RiAddCircleLine } from 'react-icons/ri'

function Input(props) {
  return (
    <form
      className='input'
      onSubmit={ event => props.submitHandler(event) }>
      <input
        type='text'
        id='name'
        value={ props.inputValue }
        onChange={ event => props.onChange(event) }
        autocomplete="off"/>
      <button className='addButton'>
        < RiAddCircleLine />
      </button>
    </form>
  )
}

export default Input

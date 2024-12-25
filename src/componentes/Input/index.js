import './Input.css'

const Input = (props) => {
    return (
        <input className='input' type={props.typeInput} placeholder={props.placeInput} />
    )
}

export default Input
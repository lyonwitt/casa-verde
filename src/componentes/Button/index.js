import './Button.css'

const Button = (props) => {
    return(
        <button className={props.classButton}>
            {props.textButton}
        </button>
    )
}

export default Button
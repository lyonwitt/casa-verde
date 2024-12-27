import { StyleInput } from "./StyleInput"

const Input = ({typeInput, placeInput, bgInput, colorPlaceHolder, alterValue, valueInput}) => {
    return (
        <StyleInput
            value = {valueInput}
            bgInput = {bgInput}
            onChange = {evento => alterValue(evento.target.value)} 
            colorPlaceHolder = {colorPlaceHolder}
            type={typeInput}
            placeholder={placeInput} 
        />
    )
}

export default Input
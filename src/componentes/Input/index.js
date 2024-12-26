import styled from 'styled-components'

const StyleInput = styled.input `
    background-color: ${props => props.bgInput || props.theme.colors.light};
    border: none;
    padding: 1.5rem;
    width: 100%;

    &::placeholder {
        color: ${props => props.colorPlaceHolder || props.theme.colors.lightgray};
    }

    &:focus {
        outline: none;
    }
`

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
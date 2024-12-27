import styled from 'styled-components'

export const StyleInput = styled.input `
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
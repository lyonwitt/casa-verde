import styled from 'styled-components'

const Btn = styled.button`
                cursor: pointer;
                background: ${props => props.bgButton || props.theme.colors.primary};
                color: ${props => props.colorButton || props.theme.colors.light};
                border: none;
                padding: 1.5rem .5rem;
                transition: ease .5s;

                &:hover {
                    background: ${props => props.hoverBgButton || props.theme.colors.dark};
                    color: ${props => props.hoverColorButton || props.theme.colors.light};
                }
            `

const Button = ({textButton, colorButton, bgButton, hoverBgButton, hoverColorButton}) => {
    return(
        <Btn 
            bgButton={bgButton} 
            colorButton={colorButton}
            hoverColorButton={hoverColorButton}
            hoverBgButton={hoverBgButton}
        >
            {textButton}
        </Btn>
    )
}

export default Button
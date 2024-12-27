import { Btn } from "./StyleButton"

const Button = ({onClick, textButton, colorButton, bgButton, hoverBgButton, hoverColorButton}) => {
    return(
        <Btn
            onClick={onClick}
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
import Button from '../Button'
import Input from '../Input'
import styled from 'styled-components'
import { MdOutlineEmail } from "react-icons/md"

const StyleNewsLetter = styled.div `
    .form-newsletter {
        display: flex;
        align-items: center;
    }
    .form-newsletter .items-newsletter{
        width: 50%;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        margin: 3rem 0;
        box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.1);
        background-color: ${props => props.theme.colors.light};
    }

    .items-newsletter button {
        width: 45% !important;
    }

    .items-newsletter:first-child {
        padding-left: 1.5rem;
        color: #AAA;
    }
`

const Newsletter = () => {   
    return(
        <StyleNewsLetter>
            <form className='form-newsletter'>
                <div className='items-newsletter'>
                    <MdOutlineEmail size="40"/>
                    <Input 
                        typeInput="email" 
                        placeInput="Insira seu e-mail" />
                    <Button                     
                        textButton="Assinar newsletter" 
                    />
                </div>
            </form>
        </StyleNewsLetter>
    )
}

export default Newsletter
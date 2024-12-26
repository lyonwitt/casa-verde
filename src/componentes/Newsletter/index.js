import Button from '../Button'
import Input from '../Input'
import { useState } from 'react'
import styled from 'styled-components'
import { MdOutlineEmail } from "react-icons/md"
import IconButton from '@mui/material/IconButton'
import { IoClose } from "react-icons/io5"
import { Snackbar } from "@mui/material"
import Alert from '@mui/material/Alert'

const StyleNewsLetter = styled.div`
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

    @media (max-width: 616px) {
        .form-newsletter {
            width: 80%;
        }
        .form-newsletter .items-newsletter {
            width: 50%;
            flex-wrap: wrap;
            padding: 0;
        }
        .items-newsletter button {
            width: 100% !important;
        }
        .items-newsletter input {
            width: 80% !important;
        }
        .items-newsletter svg {
            width: 30px !important;
            margin: 0 0 0 1rem;
        }
    }

    @media (max-width: 499px) {
        .form-newsletter .items-newsletter {
            max-width: 50%;
            flex-wrap: wrap;
            padding: 0;
        }
        .items-newsletter button {
            width: 100% !important;
        }
        .items-newsletter input {
            width: 80% !important;
        }
        .items-newsletter svg {
            width: 30px !important;
            margin: 0 0 0 1rem;
        }
    }
`

const Newsletter = () => {

    const [input, setInput] = useState('');

    const [message, setMessage] = useState('');

    const [open, setOpen] = useState(false);

    const[severity, setSeverity] = useState('');

    const handleToClose = (event, reason) => {
        if ("clickaway" == reason) return;
        setOpen(false);
    };
    
    const handleClickEvent = (evento) => {
        evento.preventDefault();

        if(input === '') {
            setMessage('O campo e-mail precisa ser preenchido.')
            setSeverity('error')
            setOpen(true);
        }

        if(input !== '') {
            setMessage(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail: ${input}`)
            setSeverity('success')
            setOpen(true);
            setInput('')
        }
    };

    return (
        <StyleNewsLetter>
            <form className='form-newsletter' onSubmit={handleClickEvent}>
                <div className='items-newsletter'>
                    <MdOutlineEmail size="40" />
                    <Input
                        valueInput = {input}
                        alterValue = {input => setInput(input)}
                        typeInput="email"
                        placeInput="Insira seu e-mail" />
                    <Button
                        textButton="Assinar newsletter"
                    />
                </div>
            </form>

            <Snackbar
                anchorOrigin={{
                horizontal: "left",
                vertical: "bottom",
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleToClose}
            >
                <Alert
                onClose={handleToClose}
                severity={severity}
                sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>

        </StyleNewsLetter>

        
    )
}
export default Newsletter
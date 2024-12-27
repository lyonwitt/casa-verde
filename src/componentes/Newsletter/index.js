import Button from '../Button'
import Input from '../Input'
import { StyleNewsLetter } from './StyleNewsletter'
import { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { Snackbar } from "@mui/material"
import Alert from '@mui/material/Alert'
import emailjs from '@emailjs/browser'



const Newsletter = () => {

    const [input, setInput] = useState('');

    const [message, setMessage] = useState('');

    const [open, setOpen] = useState(false);

    const[severity, setSeverity] = useState('');

    const handleToClose = (event, reason) => {
        if ("clickaway" === reason) return;
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

            const templateParams = {
                user_email: input,
                user_name: 'Casa Verde'
            }
            
            const serviceID = process.env.REACT_APP_SERVICE_ID
            const templateID = process.env.REACT_APP_TEMPLATE_ID
            const publicKey = process.env.REACT_APP_PUBLIC_KEY

            emailjs.send(serviceID, templateID, templateParams, publicKey).then(
                (response) => {
                    setMessage(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail: ${input}`)
                    setSeverity('success')
                    setOpen(true)
                    setInput('')
                },
                (error) => {
                    setMessage('Algo deu errado. Tente novamente')
                    setSeverity('warning')
                    setOpen(true)
                    setInput('')
                },
            );
            
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
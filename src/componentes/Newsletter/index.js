import Button from '../Button'
import Input from '../Input'
import './Newsletter.css'
import { MdOutlineEmail } from "react-icons/md";

const Newsletter = () => {
    return(
        <div className='newsletter'>
            <form className='form-newsletter'>
                <div className='items-newsletter'>
                    <MdOutlineEmail size="40"/>
                    <Input typeInput="email" placeInput="Insira seu e-mail" />
                    <Button classButton="primary" textButton="Assinar newsletter" />
                </div>
            </form>
        </div>
    )
}

export default Newsletter
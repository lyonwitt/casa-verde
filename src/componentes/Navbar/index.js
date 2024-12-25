import './Navbar.css'
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    return ( 
    
    <navbar className="navbar">
        <div className="content-navbar">
            <div className="logo">
                <img src="imagens/logo.png" width="150" alt="Logo Casa Verde Com uma folha verde à esquerda e o texto à direita" />
            </div>
            <div className="items-navbar">
                <ul>
                    <li>Como fazer</li>
                    <em>|</em>
                    <li>Ofertas</li>
                    <em>|</em>
                    <li>Depoimentos</li>
                    <em>|</em>
                    <li>Vídeos</li>
                    <em>|</em>
                    <li className='shopping-cart'>
                        Meu carrinho
                        <MdOutlineShoppingCart />
                    </li>
                </ul>
            </div>
        </div>
    </navbar>

    )
}

export default Navbar
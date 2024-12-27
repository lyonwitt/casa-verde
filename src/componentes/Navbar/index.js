import { StyleNavbar } from './StyleNavbar';
import ItensNavBar from '../ItensNavbar';
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {

    const itensNavbar = [
        {
            id: uuidv4(),
            item: 'Como fazer',
        },
        {
            id: uuidv4(),
            item: 'Ofertas',
        },
        {
            id: uuidv4(),
            item: 'Depoimentos',
        },
        {
            id: uuidv4(),
            item: 'Vídeos',
        },
        {
            id: uuidv4(),
            item: 'Meu Carrinho',
        }
    ]

    console.log(itensNavbar)
    
    return ( 
    
    <StyleNavbar>
        <div className="content-navbar">
            <div className="logo">
                <img src="imagens/logo.png" width="150" alt="Logo Casa Verde Com uma folha verde à esquerda e o texto à direita" />
            </div>
            <ItensNavBar itensNavbar={itensNavbar}/>
        </div>
    </StyleNavbar>

    )
}

export default Navbar
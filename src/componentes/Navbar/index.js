import styled from 'styled-components';
import ItensNavBar from '../ItensNavbar';
import { v4 as uuidv4 } from 'uuid';

const StyleNavbar = styled.div `
        display: flex;
        justify-content: center;

    .content-navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1200px;
        padding: 1.5rem 0;
    }

    @media (max-width: 959px) {
        .content-navbar {
            flex-direction: column;
            gap: 30px;
        }
    }
`

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
            item: 'Meus Carrinho',
        }
    ]

    console.log(itensNavbar)
    
    return ( 
    
    <StyleNavbar>
        <div className="content-navbar">
            <div className="logo">
                <img src="imagens/logo.png" width="150" alt="Logo Casa Verde Com uma folha verde à esquerda e o texto à direita" />
            </div>
            <div className="items-navbar">
                <ItensNavBar itensNavbar={itensNavbar}/>
            </div>
        </div>
    </StyleNavbar>

    )
}

export default Navbar
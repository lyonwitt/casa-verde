import styled from "styled-components";

const StyleItensNavBar = styled.ul `
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
        list-style: none;   
`

const ItensNavBar = ({itensNavbar}) => {
    return (
        <StyleItensNavBar>
            {itensNavbar.map((item, index) => (
                <li key={item.id}>
                {item.item} {/* Corrigido para exibir o texto do item */}
                {index < itensNavbar.length - 1 && <span>&nbsp;/&nbsp;</span>}
                </li>
            ))}        
        </StyleItensNavBar>
    )
}

export default ItensNavBar
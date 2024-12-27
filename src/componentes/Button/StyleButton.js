import styled from 'styled-components'

export const Btn = styled.button`
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

        
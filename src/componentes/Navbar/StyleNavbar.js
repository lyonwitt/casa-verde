import styled from 'styled-components';

export const StyleNavbar = styled.div `
        display: flex;
        justify-content: center;

    .content-navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1200px;
        padding: 1.5rem 0;
    }

    @media (max-width: 1049px) {
        .content-navbar {
            flex-direction: column;
            gap: 30px;
        }
    }
`
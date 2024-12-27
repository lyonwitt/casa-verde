import styled from 'styled-components'

export const StyleNewsLetter = styled.div`
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
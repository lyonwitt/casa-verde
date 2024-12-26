import { createGlobalStyle } from 'styled-components';
import { ResetCss } from './ResetCss';

export const GlobalStyle = createGlobalStyle`
${ResetCss}

@import url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    font-family: Montserrat,sans-serif;
    color: #202020;
    background-image: url('../public/imagens/bg.png'); 
    width: 100vw;
    height: 100vh;
}
`;
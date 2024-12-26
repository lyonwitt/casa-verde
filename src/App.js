import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import Navbar from "./componentes/Navbar";
import Newsletter from "./componentes/Newsletter";

const StyleApp = styled.div `
  .app-header {
    padding: 0 1rem;
  }

  @media (min-width: 1050px) {
      .app-header {
          background-image: url('/imagens/img-1-header.png'), url('/imagens/img-bg-header.png');
          height: 975px;
          background-repeat: no-repeat;
          background-position: right top;
      }   
  }
  
  @media (max-width: 1049px) {
      .app-header {
          padding: 0;
          height: auto;
      }
      .app-header .text-header {
          background:${props => props.theme.colors.lightyellow};
          padding: 1rem;
          margin: 3rem auto !important;
      } 
      
      .app-header .text-header h1 {
        font-size: 62px !important;
      }
  }

  .app-header .text-header {
      width: 1200px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin: 9rem auto;
  }

  .app-header .text-header h1 {
      font-family: ${props => props.theme.fonts.secondary};
      font-weight: 900;
      font-size: 82px;
      width: 40%;
  }

  .app-header .text-header p {
      width: 40%;
      opacity: .5;
      font-size: 22px;
  }

  .app-header .text-header .little-text {
      font-size: 16px;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyleApp>
        <header className="app-header">
          <Navbar />
          <div className="text-header">

            <p>Sua casa com as</p>
            <h1>melhores plantas</h1>
            <p className="little-text">
              Encontre aqui uma vasta seleção de plantas para decorar a sua casa e 
              torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail 
              e assine nossa newsletter para saber das novidades da marca.
            </p>
            
            <Newsletter />
          </div>
        </header>
      </StyleApp>
    </ThemeProvider>
  );
}

export default App;

import Navbar from "./componentes/Navbar";
import './App.css';
import Newsletter from "./componentes/Newsletter";

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;

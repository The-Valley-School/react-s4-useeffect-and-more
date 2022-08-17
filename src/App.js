import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  const [visible, setVisible] = React.useState(true);

  return (
    <div className='app'>
      <button onClick={ ()=> setVisible(!visible) }>Mostrar / ocultar calculadora</button>
      {/* Dos formas de hacer condicionales en JSX */}
      { visible && <Calculator></Calculator> }
      { visible ? <Calculator></Calculator> : '' }
    </div>
  );
}

export default App;

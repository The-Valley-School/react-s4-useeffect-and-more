import React from 'react';
import './App.css';

import Calculator from './components/Calculator';
import UserList from './components/UserList/UserList';

function App() {
  const [visible, setVisible] = React.useState(true);

  return (
    <div className='app'>
      <h2>Ejemplo de listado de usuarios:</h2>
      <UserList></UserList>

      <h2>Ejemplo de la calculadora:</h2>
      <p>Pulsa el botón para <button onClick={() => setVisible(!visible)}> {visible ? "Ocultar" : "Mostrar"} calculadora</button></p>

      {/* Dos formas de hacer condicionales en JSX */}
      {visible && <Calculator></Calculator>}
      {visible ? <Calculator></Calculator> : ''}
    </div>
  );
}

export default App;

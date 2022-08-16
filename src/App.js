import React from 'react';
import './App.css';

function App() {
  // Estados, variables... 
  const [firstNumber, setFirstNumber] = React.useState(0);
  const [secondNumber, setSecondNumber] = React.useState(0);
  const [result, setResult] = React.useState(0);

  // Efectos

  // Este efecto se ejecuta en cada repintado (porque React no tiene lista de dependencias, no sabe cuales son)
  React.useEffect(() => {
    console.log("INICIO 1: Efecto que se ejecuta en repintado!!");

    // La función del return se ejecuta ANTES de cada repintado
    return () => console.log("FINAL 1: Efecto que se ejecuta en repintado!!");
  });

  // Este efecto se ejecuta solo en el primer pintado (porque le decimos a React que no tiene dependencias -> [])
  React.useEffect(() => {
    console.log("INICIO 2: Efecto que solo se ejecuta en el inicio!!");

    // La función del return se ejecuta en la muerte del componente
    return () => console.log("FINAL 2: Efecto que solo se ejecuta en el inicio!!");
  }, []);

  // Este efecto se va a ejecutar cuando cambie la variable firstnumber o secondNumber
  React.useEffect(() => {
    console.log("INICIO 3: Efecto que solo se ejecuta si cambia firstNumber o secondNumber!!");
    setResult(firstNumber + secondNumber);
    
    // La función del return se ejecuta previa ejecución del propio efecto
    return () => console.log("FINAL 3: Efecto que solo se ejecuta si cambia firstNumber o secondNumber!!");
  }, [firstNumber, secondNumber]);

  return (
    <div>
      <input type="number" value={firstNumber} onChange={(event) => {
        setFirstNumber(parseInt(event.target.value));
      }} />
      <input type="number" value={secondNumber} onChange={(event) => {
        setSecondNumber(parseInt(event.target.value));
      }} />
      <p>El resultado de la suma es: {result}</p>
    </div>
  );
}

export default App;

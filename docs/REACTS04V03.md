# VIDEO 03 - UseEffect con return

Hasta ahora hemos trabajado con `UseEffect` para realizar acciones cuando se crea el componente o cuando un variable cambia de valor. 

Gracias al return que podemos indicar en la función del `UseEffect` podremos también ejecutar código en otros momentos, como por ejemplo cuando se destruya el componente o antes de que una variable cambie de valor.

En este vídeo veremos cómo se comporta `UseEffect` cuando retorna una función de callback, te dejamos por aquí en este snippet los tres principales ejemplos de uso comentados:

```jsx
// Este efecto se ejecuta en cada repintado
// porque React no tiene lista de dependencias, no sabe cuales son
React.useEffect(() => {
  console.log("INICIO 1: Efecto que se ejecuta en repintado!!");

  // La función del return se ejecuta ANTES de cada repintado
  return () => console.log("FINAL 1: Efecto que se ejecuta en repintado!!");
});

// Este efecto se ejecuta solo en el primer pintado
// Porque le decimos a React que no tiene dependencias -> []
React.useEffect(() => {
  console.log("INICIO 2: Efecto que solo se ejecuta en el inicio!!");

  // La función del return se ejecuta en la muerte del componente
  return () => console.log("FINAL 2: Efecto que solo se ejecuta en el inicio!!");
}, []);

// Este efecto se va a ejecutar cuando cambie
// la variable firstnumber o secondNumber
React.useEffect(() => {
  console.log("INICIO 3: Efecto que solo se ejecuta si cambia firstNumber o secondNumber!!");
  setResult(firstNumber + secondNumber);
  
  // La función del return se ejecuta previa ejecución del propio efecto
  return () => console.log("FINAL 3: Efecto que solo se ejecuta si cambia firstNumber o secondNumber!!");
}, [firstNumber, secondNumber]);
```

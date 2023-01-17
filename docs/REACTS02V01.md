# VIDEO 01 - UseEffect

En ocasiones necesitamos realizar acciones en momentos determinados, por ejemplo cuando el componente se pinta por primera vez, cuando una variable cambia su valor o cuando un componente es destruido. Es aquí donde entra en juego `UseEffect`

`UseEffect` es un hook de React que nos permite ejecutar código en determinados momentos del ciclo de vida del componente.

Hay 3 maneras de usa useEffect dependiendo de las opciones que le pasemos en el parámetro dependencias, en este vídeo veremos las tres opciones que te dejamos a continuación, en los comentarios encontrarás más información sobre cuándo se ejecutan:

```jsx
// Este efecto se ejecuta en cada repintado
// porque React no tiene lista de dependencias, no sabe cuales son
React.useEffect(() => {
  console.log("INICIO 1: Efecto que se ejecuta en repintado!!");
});

// Este efecto se ejecuta solo en el primer pintado
// porque le decimos a React que no tiene dependencias -> []
React.useEffect(() => {
  console.log("INICIO 2: Efecto que solo se ejecuta en el inicio!!");
}, []);

// Este efecto se va a ejecutar cuando cambie
// la variable firstnumber o secondNumber
React.useEffect(() => {
  console.log("INICIO 3: Efecto que solo se ejecuta si cambia firstNumber o secondNumber!!");
  setResult(firstNumber + secondNumber);
}, [firstNumber, secondNumber]);
```

Si te fijas la diferencia entre los tres usos son las dependencias que le indicamos al `React.useEffect` ya que:

- En el primero no le indicamos nada
- En el segundo le indicamos explícitamente que no tiene dependencias (array vacío)
- En el tercero le indicamos que las dependencias son `[firstNumber, secondNumber]`

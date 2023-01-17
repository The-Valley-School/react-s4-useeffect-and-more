# VIDEO 02 - UseEffect (caso práctico)

En este vídeo veremos un caso práctico en el que haremos uso de etiquetas `input` de texto para modificar el valor de un estado.

En el siguiente snippet te dejamos un ejemplo donde podrás observar cómo conectamos un estado a un input para mostrar y modificar su valor.

```jsx
// Estado para almacenar la variable firstNumber
const [firstNumber, setFirstNumber] = React.useState(0);

// Input enganchado con onChange y value al estado
<input type="number" value={firstNumber} onChange={(event) => {
  setFirstNumber(parseInt(event.target.value));
}} />
```

Además en este caso práctico trabajaremos con `UseEffect` para ver cómo se ve afectado por los cambios de valor en los estados.

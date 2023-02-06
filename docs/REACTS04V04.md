# VIDEO 04 - UseEffect destruyendo componente

Hasta ahora no hemos podido probar la función que se ejecuta cuando se destruye el componente, ya que no hemos aprendido a pintar u ocultar componentes de forma dinámica. 

En este vídeo mostraremos de forma práctica cómo se ejecuta el callback de useEffect probando a ocultar y mostrar un componente haciendo uso de los condicionales de JSX.

En el snippet siguiente de código podrás observar formar de mostrar/ocultar un componente:

- Mediante el operador `&&`
- Mediante un ternario `?`

```jsx
const [visible, setVisible] = React.useState(true);

return (
  <div className='app'>
    <button onClick={ ()=> setVisible(!visible) }>Mostrar / ocultar calculadora</button>
    {/* Dos formas de hacer condicionales en JSX */}
    { visible && <Calculator></Calculator> }
    { visible ? <Calculator></Calculator> : '' }
  </div>
```

# VIDEO 06 - UseEffect con debounce

Vamos a seguir completando el ejemplo anterior, en este caso mejorándolo.

En este video crearemos un pequeño buscador de usuarios que hará uso del parámetro de filtrado `name_like` de la API que ya conocemos:

[https://jsonplaceholder.typicode.com/users?name_like=Leanne](https://jsonplaceholder.typicode.com/users?name_like=Leanne)

Para no realizar una llamada con cada pulsación en el teclado, instalaremos un Hook custom de React, en este caso usaremos `use-debounce` que nos permitirá escuchar los cambios en un input, pero con cierto retardo para no hacer demasiadas llamadas a la API.

Te dejamos el enlace del paquete npm por aquí:

[https://www.npmjs.com/package/use-debounce](https://www.npmjs.com/package/use-debounce)

Si te fijas `useDebaunce` recibe el valor a escuchar (`filter` en nuestro caso) y el tiempo mínimo que queremos que pase entre cada cambio (`1000` milisegundos en nuestro caso que equivale a 1 segundo):

```jsx
// Estado para almacenar nuestro texto de filtrado
const [filter, setFilter] = React.useState("");

// filterWithTime tendrá el valor de filter pero con retardo
const [filterWithTime] = useDebounce(filter, 1000);

React.useEffect(() => {

  // Llamada a la API
  fetch(`${API_URL}${filterWithTime}`)
    .then((response) => response.json())
    .then((data) => {
      setUserList(data);
    });

}, [filterWithTime]);
```

Esto nos genera una nueva variable o estado, que hemos llamado `filterWithTime` y que podremos utilizar como dependencia de nuestro `UseEffect`

# VIDEO 05 - UseEffect con llamada a API

Vamos a empezar a programar funcionalidades algo más divertidas 🙂

En este video haremos una llamada a una API para mostrar un listado de usuarios:

<https://jsonplaceholder.typicode.com/users?name_like=Leanne>

De esta forma mostraremos un ejemplo del uso de `UseEffect` y también aprenderemos a usar el map de JSX para pintar los elementos de un array.

En el siguiente snippet te mostramos cómo hacer una llamada a una API con `fetch` cuando se pinte por primera vez un componente:

```jsx
// Estado para almacenar la lista de usuarios
const [userList, setUserList] = React.useState([]);

React.useEffect(() => {

  // Llamada a la API
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      setUserList(data);
    });

}, []);
```

En el siguiente snippet de código te dejamos el ejemplo del `map` para el pintado de elementos de un array, en este caso los usuarios:

```jsx
{userList.map((user) => (
  <tr key={user.id}>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
  </tr>
))}
```

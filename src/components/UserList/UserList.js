import React from "react";
import { useDebounce } from 'use-debounce';
import "./UserList.css";

const API_URL = "https://jsonplaceholder.typicode.com/users?name_like=";

const UserList = () => {
  // Estado para almacenar usuarios
  const [userList, setUserList] = React.useState([]);

  // Estado para almacenar nuestro texto de filtrado
  const [filter, setFilter] = React.useState("");
  const [filterWithTime] = useDebounce(filter, 1000);

  React.useEffect(() => {

    // Llamada a la API
    fetch(`${API_URL}${filterWithTime}`)
      .then((response) => response.json())
      .then((data) => {
        setUserList(data);
      });

  }, [filterWithTime]);

  return (
    <div className="user-list">

      <p>Buscador de usuarios:</p>
      <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)} />

      <p>Valor: {filter}</p>
      <p>Valor con debaunce: {filterWithTime}</p>

      <p>Listado de usuarios:</p>
      <table className="user-list__table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>

          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default UserList;

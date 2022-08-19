import React from "react";
import "./UserList.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const UserList = () => {
  // Estado para almacenar usuarios
  const [userList, setUserList] = React.useState([]);

  React.useEffect(() => {

    // Llamada a la API
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setUserList(data);
      });

  }, []);

  return (
    <div className="user-list">
      <p>Listado de usuarios:</p>
      <table className="user-list__table">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>

          {userList.map((user) => (
            <tr>
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

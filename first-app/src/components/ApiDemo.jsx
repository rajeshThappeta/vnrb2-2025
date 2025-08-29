import { useEffect, useState } from "react";

function ApiDemo() {
  //state
  let [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch("https://dummyjson.com/users");
    let usersObj = await res.json();
    let users = usersObj.users;
    setUsers(users);
  };

  //It will execute effect funciton only after initial rendering
  useEffect(() => {
    getUsers();
  },[]);

  //retur react element
  return (
    <div className="text-center container">
      <h1 className="text-info display-3">API Demo</h1>
      {/* display users in table */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          {users.map((userObj) => (
            <tr key={userObj.id}>
              <td>{userObj.id}</td>
              <td>{userObj.firstName}</td>
              <td>{userObj.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiDemo;

// Rendering JSX elment -1
// Making API req      -2

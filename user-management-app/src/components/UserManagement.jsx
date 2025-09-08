import UserForm from "./UserForm";
import UserList from "./UserList";
import { useState, useEffect } from "react";

function UserManagement() {
  //users state
  let [users, setUsers] = useState([]);

  //functions to modify users state
  async function createUser(newUser) {
    console.log(newUser);
    //Save(Create) newUser in local API by making HTTP POST req
    let res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (res.status === 201) {
      //read latest users
      readUsers();
    }
  }

  //read all users from API
  async function readUsers() {
    let res = await fetch("http://localhost:3000/users", { method: "GET" });
    let usersList = await res.json();
    setUsers(usersList);
  }

  async function deleteUser(id) {
    //HTTP DELETE req to delete a specific user
    let res = await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" });
    console.log(res);
    if (res.status === 200) {
      //to get latest users after deletions
      readUsers();
    }
  }

  
  function modifyUser() {}

  // read users once the component is loaded
  useEffect(() => {
    readUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="display-3 text-center text-primary">User management</h1>
      <div className="row text-center">
        <div className="col-md-6">
          <UserForm createUser={createUser} />
        </div>
        <div className="col-md-6">
          <UserList users={users} readUsers={readUsers} deleteUser={deleteUser} modifyUser={modifyUser} />
        </div>
      </div>
    </div>
  );
}

export default UserManagement;

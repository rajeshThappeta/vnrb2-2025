import { createContext, useState, useEffect } from "react";
export const userContextObject = createContext();

function UserContext({ children }) {
  //state
  const [users, setUsers] = useState([]);

  //get users
  const getUsers = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let usersList = await res.json();
    setUsers(usersList);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <userContextObject.Provider value={users}>{children}</userContextObject.Provider>;
}

export default UserContext;

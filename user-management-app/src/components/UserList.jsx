function UserList(props) {
  // { users,readUsers, modifyUsers,deleteUser}
  return (
    <div>
      <h1 className="mt-5">List of Users</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Date of birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((userObj) => (
            <tr key={userObj.id}>
              <td>{userObj.id}</td>
              <td>{userObj.username}</td>
              <td>{userObj.dob}</td>
              <td>{userObj.email}</td>
              <td>
                <button className=" btn btn-sm btn-danger" onClick={()=>props.deleteUser(userObj.id)}>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

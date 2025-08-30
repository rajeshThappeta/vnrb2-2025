function UserList(){
    return(
        <div>
            <h1 className="mt-5">List of Users</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Date of birth</th>
                        <th>Email</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default UserList;
import UserForm from "./UserForm";
import UserList from "./UserList";

function UserManagement(){
    return(
        <div className="container">
            <h1 className="display-3 text-center text-primary">User management</h1>
            <div className="row text-center">
                <div className="col-md-6">
                    <UserForm />
                </div>
                <div className="col-md-6">
                    <UserList />
                </div>
            </div>
        </div>
    )
}

export default UserManagement;
function UserForm(){
    return(
        <div className="mt-5">
            <h1>Create new User</h1>
            <form className="bg-light p-5">
                <input type="text" name="" id="" className="form-control mb-3" placeholder="Username"/>
                <input type="date" name="" id="" className="form-control mb-3" />
                <input type="email" name="" id="" className="form-control mb-3" />
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )
}

export default UserForm
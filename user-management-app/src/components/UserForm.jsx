import {useForm} from 'react-hook-form'

function UserForm(props){ //{ createUser : fn()}

    let {register,handleSubmit,formState:{errors}}=useForm()


    return(
        <div className="mt-5">
            <h1>Create new User</h1>
            <form className="bg-light p-5" onSubmit={handleSubmit(props.createUser)}>
                <input type="text" {...register("username")} className="form-control mb-3" placeholder="Username"/>
                <input type="date" {...register("dob")} className="form-control mb-3" />
                <input type="email" {...register("email")} className="form-control mb-3" />
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )
}

export default UserForm
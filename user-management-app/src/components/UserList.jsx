import { useState } from "react";
import { Modal } from "react-bootstrap";
import {useForm} from 'react-hook-form'

function UserList(props) {

    let {register,handleSubmit,setValue}=useForm()
  
    //state related to control Modal
    let [showModal,setShowModal]=useState(false)
    function openModal(){
        setShowModal(true)
    }
    function closeModal(){
        setShowModal(false)
    }

    function userToEdit(userObj){
        //open the modal
        openModal()
        //place userObj data in edit form
        setValue("id",userObj.id)
        setValue("username",userObj.username)
        setValue("dob",userObj.dob)
        setValue("email",userObj.email)

    }

    function saveModifiedUser(modifiedUserObj){
            //close the modal
            closeModal()
            //passing modifiedUserObj to 
            props.modifyUser(modifiedUserObj)
    }

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
                <button className=" btn btn-sm btn-danger" onClick={() => props.deleteUser(userObj.id)}>
                  x
                </button>
              </td>
              <td>
                <button className="btn btn-sm btn-warning" onClick={()=>userToEdit(userObj)}>edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* modal to edit user data */}
      <Modal show={showModal}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
            {/* user edit form */}
            <form onSubmit={handleSubmit(saveModifiedUser)}>
                <input type="text" {...register("id")}  className="form-control mb-3"  disabled/>
                <input type="text" {...register("username")} className="form-control mb-3" />
                <input type="date" {...register("dob")} className="form-control mb-3" />
                <input type="email" {...register("email")} className="form-control mb-3" />
                <button type="submit" className="btn btn-success">Save</button>
            </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UserList;

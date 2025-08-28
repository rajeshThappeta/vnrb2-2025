import {useState} from 'react';

function StateChangeDemo(){
    //state
    let [counter,setCounter]=useState(0) //[ state, function to change state]
    let [username,setUsername]=useState("Ravi")
    let [student,setStudent]=useState({sno:100,name:'bhanu',city:"hyderabad"})
    let [marks,setMarks]=useState([10,30,40,50])



    const incrementCounter=()=>{
        setCounter(counter+1)
    }

    const changeUsername=()=>{
        setUsername("Ravi kumar")
    }

    const changeStudent=()=>{
        setStudent({...student,name:"bhanu prasad",city:"chennai"}) //{ sno:100,name:'bhanu',name:"bhanu prasad"}
    }

    const addMarks=()=>{
        setMarks([...marks,100]) //[ 10,30,40,50,100]
    }

    //return react element
    return(
        <div className="text-center">
                <h1 className="text-info display-3">State Demo</h1>
                <h2 className="display-4">{counter}</h2>
                <button className="btn btn-success" onClick={incrementCounter}>+</button>
                <h2 className="display-4">{username}</h2>
                <button className="btn btn-warning" onClick={changeUsername}>Chnage username</button>

                <h2>{student.sno}</h2>
                <h2>{student.name}</h2>
                <h2>{student.city}</h2>
                <button className="btn btn-danger" onClick={changeStudent}>Change student</button>


                {
                    marks.map((m,index)=><h3 key={index}>{m}</h3>)
                }
                <button className="btn btn-primary" onClick={addMarks}>Add new marks</button>

        </div>
    )
}

export default StateChangeDemo
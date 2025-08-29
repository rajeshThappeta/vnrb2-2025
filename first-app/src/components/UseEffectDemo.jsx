import {useState,useEffect} from 'react'

function UseEffectDemo(){
    //state
    let [counter1,setCounter1]=useState(100)
    const changeCouter1=()=>{
        setCounter1(counter1+1)
    }

    let [counter2,setCounter2]=useState(200)
    const changeCouter2=()=>{
        setCounter2(counter2+1)
    }

    //use effect
    //Effect function executes immediately after initial rendering
    //When we want sideeffect need to execute for every state change, remove second arg
    useEffect(()=>{
        //effect
        console.log("use effect executed")
    },[counter2])

    //return a react element
    return(
        <div className='text-center'>
            <h1 className=" display-2">UseEffect Demo</h1>
            <h2>Counter1 : {counter1}</h2>
            <button className="btn btn-warning" onClick={changeCouter1}>Change couter1</button>

             <h2>Counter2 : {counter2}</h2>
            <button className="btn btn-warning" onClick={changeCouter2}>Change couter2</button>
        </div>
    )
}


export default UseEffectDemo;


//initial render - when component loaded
//re-render - whenever state changes
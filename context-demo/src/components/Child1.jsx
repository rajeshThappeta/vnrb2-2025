import { useContext } from "react";
import { counterContextObj } from "../contexts/CounterContext";
import { userContextObject } from "../contexts/UserContext";


function Child1() {
  console.log("Child1")
  //get state from counter context
  let {counter,increment} = useContext(counterContextObj); //{ counter,increment,decrement}
  //get state from user context
//  let users=useContext(userContextObject)


  return <div className="text-center p-5 bg-warning">
      <h1>Child-1</h1>
      <p className="fs-1">Counter : {counter}</p>
      <button className="btn btn-success" onClick={increment}>+</button>
      {/* <h2>No of users : {users.length}</h2> */}
  </div>;
}

export default Child1;

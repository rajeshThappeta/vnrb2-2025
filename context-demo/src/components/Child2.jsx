import { useContext } from "react";
import { counterContextObj } from "../contexts/CounterContext";
import { userContextObject } from "../contexts/UserContext";

function Child2() {
  console.log("Child2")
  let { counter1, decrement1 } = useContext(counterContextObj);
  //let users=useContext(userContextObject)

  return (
    <div className="text-center p-5 bg-secondary text-white">
      <h1>Child-2</h1>
      <p className="fs-1">Counter1 : {counter1}</p>
      <button className="btn btn-danger" onClick={decrement1}>
      
        -
      </button>
      {/* <h2>No of users :{users.length}</h2> */}
    </div>
  );
}

export default Child2;

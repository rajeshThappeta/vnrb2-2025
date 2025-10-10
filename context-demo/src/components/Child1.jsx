import { useContext } from "react";
import { counterContextObj } from "../contexts/CounterContext";

function Child1() {
  //get state from context
  let {counter,increment} = useContext(counterContextObj); //{ counter,increment,decrement}

  return <div className="text-center p-5 bg-warning">
      <h1>Child-1</h1>
      <p className="fs-1">Counter : {counter}</p>
      <button className="btn btn-success" onClick={increment}>+</button>
  </div>;
}

export default Child1;

//create context obj
import { createContext, useState } from "react";
export const counterContextObj = createContext();

function CounterContext({ children }) {
  //state-1
  let [counter, setCounter] = useState(100);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  //state-2
  let [counter1, setCounter1] = useState(200);

  function increment1() {
    setCounter1(counter1 + 1);
  }
  function decrement1() {
    setCounter1(counter1 - 1);
  }

  return (
    <counterContextObj.Provider value={{ counter, increment, decrement, counter1, increment1, decrement1 }}>
      {children}
    </counterContextObj.Provider>
  );
}

export default CounterContext;

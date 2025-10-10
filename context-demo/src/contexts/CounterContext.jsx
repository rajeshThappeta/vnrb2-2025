//create context obj
import {createContext, useState} from 'react'
export const counterContextObj=createContext()

function CounterContext({children}) {

    //state
    let [counter,setCounter]=useState(100)
    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        setCounter(counter-1)
    }

  return (
    <counterContextObj.Provider value={{counter,increment,decrement}}>
        {children}
    </counterContextObj.Provider>
  )
}

export default CounterContext
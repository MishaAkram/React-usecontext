import React, { useReducer } from 'react'
import numberReducer from './numberReducer';

function Child2() {
    let [state,dispatch] =useReducer(numberReducer,52)
    return (
        <div>
            Child2 {state}
            <button onClick={()=>{dispatch({type:"INCREMENT",val:37})}}>Increment</button>
            <button onClick ={() => {dispatch({type:"DECREMENT",val:-37})}}>Decrement</button>
        </div>
    )
}

export default Child2

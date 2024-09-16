import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decCounter, incCounter } from './redux/couter/couterActions'
function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.value)

  return (
    <div>
        
        <h1>{count}</h1>
        <button onClick={()=>dispatch(incCounter())}>+</button>
        <button onClick={()=>dispatch(decCounter())}>-</button>

    </div>
  )
}

export default Counter
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProdAction } from './redux/products/productsActions'

function Addproduct() {
    const [product,setProduct]=useState({id:"",title:""})

    const dispatch=useDispatch()
  return (
    <div>
        <input type="text" onChange={(e)=>setProduct({...product,id:e.target.value})} /> id 
        <input type="text" onChange={(e)=>setProduct({...product,title:e.target.value})}  />title
        <button onClick={()=>dispatch(addProdAction(product))}>submit</button>
    </div>
  )
}

export default Addproduct
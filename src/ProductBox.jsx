import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProdAction } from './redux/products/productsActions'

function ProductBox({product}) {
    const dispatch=useDispatch()
  return (
    <div><h1>{product.title} </h1>
    <button onClick={()=>dispatch(deleteProdAction(product))} >delete </button>

    </div>
  )
}

export default ProductBox
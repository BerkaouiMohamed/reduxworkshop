import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import ProductBox from './ProductBox'
import store from "./redux/store"

function Products() {

    const dispatch=useDispatch()
    const products=useSelector(state=>state.products)


    
  return (
    <div>

{products.map(prod=><ProductBox key={prod.id} product={prod} />)}
    </div>
  )
}

export default Products
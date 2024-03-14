import React from 'react'
import {useState, useEffect} from 'react'
import { getProducts } from '../../mock/data'
import ItemList from '../itemList/ItemList'
function ItemListContainer({greeting}) {
const [products, setProducts] = useState([])
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)

useEffect(()=>{
  setLoading(true)
  getProducts()
  .then((res)=> setProducts(res))
  .catch((error)=> setError(error))
  .finally(()=> setLoading(false))
},[])
if (loading) {
  return <h1>cargando...</h1>
}
if (error) {
  return <h1>hubo un error intente mas tarde</h1>
}

  return (
    <div>
        <h1>{greeting}</h1>
       <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer

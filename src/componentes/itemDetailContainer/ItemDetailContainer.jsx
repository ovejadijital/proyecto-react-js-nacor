import React, { useEffect, useState } from 'react'
import { getOneproduct } from '../../mock/data'
import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        getOneproduct()
        .then((res)=> setProductDetail(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])

    if (loading) {
        return<h1>cargando detalle...</h1>
    }
  return (
    <div>
        <ItemDetail productDetail={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer
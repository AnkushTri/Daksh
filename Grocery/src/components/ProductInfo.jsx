import React from 'react'
import { useParams } from 'react-router-dom'

const ProductInfo = () => {

    const {id}=useParams();
  return (
    <div>ProductInfo{id}</div>
  )
}

export default ProductInfo
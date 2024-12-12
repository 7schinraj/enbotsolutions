import React from 'react'
import './ProductCard.css'
const ProductCard = (props) => {
  return (
      <div className="product-card down-card">
        <h1>{props.title}</h1>
        <p>{props.des}</p>
      </div>
  )
}
export default ProductCard
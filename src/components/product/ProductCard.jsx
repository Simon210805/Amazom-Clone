import React from 'react'
import Rating   from '@mui/material/Rating'
import CurrencyFormat from '../currencyFormat/CurrencyFormat'
import classes from "./Product.module.css"
function ProductCard({ Product }) {
    const { title, price, rating, image } = Product
  return (
      <div className={classes.productCard}>
          <a href="">
              <img src={image} alt="" />
          </a>
          <h3>{title}</h3>
          <div className={classes.rating}>
              {/* rating */}
              <Rating name="read-only" value={rating.rate} readOnly precision={0.1} />
              {/* count */}
              <small>{rating.count}</small>

          </div>
          <div>
              {/* price */}
              <CurrencyFormat amount={price} />
          </div>
          {/* button */}
          <button className={classes.button}>add to cart</button>
    </div>
  )
}

export default ProductCard

import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./Product.module.css";

function ProductCard({ Product }) {
  // Check if Product is defined
  if (!Product) {
    return null; // Or render a loading indicator or an error message
  }

  // Destructure Product properties
  const { title, price, rating, image } = Product;

  return (
    <div className={classes.productCard}>
      <Link to={`/product/${Product.id}`}>
        <img src={image} alt="" />
      </Link>
      {/* Check if title is defined */}
      <h3>{title || "Title not available"}</h3>
      <div className={classes.rating}>
        {/* Check if rating is defined */}
        {rating && (
          <>
            {/* rating */}
            <Rating value={rating.rate || 0} precision={0.1} />
            {/* count */}
            <small>{rating.count}</small>
          </>
        )}
      </div>
      <div>
        {/* price */}
        <CurrencyFormat amount={price} />
      </div>
      {/* button */}
      <button className={classes.button}>add to cart</button>
    </div>
  );
}

export default ProductCard;

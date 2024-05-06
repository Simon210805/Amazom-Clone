import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./Product.module.css";
import { DataContext } from "../dataProvider/DataProvider";
import { type } from "../../utility/Action.type";

function ProductCard({ Product, flex, renderdesc,renderAddToCart }) {
  // Check if Product is defined
  if (!Product) {
    return null; // Or render a loading indicator or an error message
  }

  // Destructure Product properties
  const { title, price, rating, image, description } = Product;

  const [state, dispatch] = useContext(DataContext);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title,
        price,
        rating,
        image,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.productCard}${
        flex ? " " + classes.product_flexed : ""
      }`}
    >
      <Link to={`/product/${Product.id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        {/* Check if title is defined */}
        <h3>{title || "Title not available"}</h3>
        {renderdesc && (
          <p style={{ maxWidth: "750px" }}>
            {description || "Description not available"}
          </p>
        )}
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
      </div>
      <div>
        {/* price */}
        <CurrencyFormat amount={price} />
      </div>
      {/* button */}
      {
        renderAddToCart && <button className={classes.button} onClick={addToCart}>add to cart</button>
      }
    </div>
  );
}

export default ProductCard;

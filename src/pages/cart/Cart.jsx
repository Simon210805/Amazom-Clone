import React from "react";
import { useContext } from "react";
import LayOut from "../../components/layOut/LayOut";
import ProductCard from "../../components/product/ProductCard";
import { DataContext } from "../../components/dataProvider/DataProvider";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import CurrencyFormat from "../../components/currencyFormat/CurrencyFormat"; // Correct import statement
import { type } from "../../utility/Action.type";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount; // Multiply item price by its quantity
  }, 0);


  const inCrement = (item) => {
    dispatch({
      type: type.ADD_TO_BASKET, item
    });
  }

  const deCrement = (id) => {
    dispatch({
      type: type.REMOVE_FROM_BASKET, id
    });
  }
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? ( // Use strict equality operator
            <p>Your basket is empty</p>
          ) : (
            basket?.map((item, index) => {
              return (
                <section key={index} className={classes.cart_product}>
                  <ProductCard
                    key={index}
                    Product={item}
                    renderdesc={true}
                    flex={true}
                    renderAddToCart={false}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => inCrement(item)}
                    >
                      <IoIosArrowUp size={20} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => deCrement(item.id)}
                    >
                      <IoIosArrowDown size={20} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.total}>
            <div>
              <p>subTotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
              {/* Correct usage of CurrencyFormat component */}
            </div>

            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payment">continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
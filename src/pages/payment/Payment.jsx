import React, { useContext, useState } from 'react'
import LayOut from '../../components/layOut/LayOut'
import classes from './Payment.module.css'
import { DataContext } from '../../components/dataProvider/DataProvider'
import ProductCard from "../../components/product/ProductCard";
import {
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import CurrencyFormat from '../../components/currencyFormat/CurrencyFormat';

function Payment() {
  const [{user, basket }] = useContext(DataContext);
  const totalItems = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount; // Multiply item price by its quantity
  }, 0);
const [cardError, setCardError] = useState(null);
   const stripe = useStripe();
  const elements = useElements();
  const handleChange = (e) => {
    console.log(e)
    e?.error?.message? setCardError(e?.error?.message) : setCardError("")

  }
  return (
    <LayOut>
      {/* header */}
      <div className={classes.Payment_header}>
        checkout ({totalItems}) items
      </div>
      {/* payment */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>react js</div>
            <div>Norway</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard
                Product={item}
                flex={true}
              />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form action="">
                {/* error */}
                {cardError && <p style={{ color: "red" }}>{cardError}</p>}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment_price}>
                  <span>
                Total Order | <CurrencyFormat amount={total} />
                  </span>
                  <br />
                <button type="submit">Pay now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment
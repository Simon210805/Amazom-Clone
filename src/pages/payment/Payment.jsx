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
import { axiosInstance } from '../../api/axios';
import { ClipLoader } from 'react-spinners';
import { db } from '../../utility/Firebase';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const [{user, basket }] = useContext(DataContext);
  const totalItems = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount; // Multiply item price by its quantity
  }, 0);
  const [cardError, setCardError] = useState(null);
  const [Processing, setProcessing] = useState(false);
   const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e)
    e?.error?.message? setCardError(e?.error?.message) : setCardError("")

  }

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      // 1. backend || functions ---> contact to the client script
      const response = await axiosInstance({
        method: "post",
        url: `/payments/create?total=${total * 100}`,
      });
      console.log(response.data);
      const clienScript = response.data?.clientSecret;
      // 2. client side (react side confirmation)
      const {paymentIntent} = await stripe.confirmCardPayment(clienScript, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log(paymentIntent);
      // 3. after the confirmation --> order firestore database save, clear basket
    await db .collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
      basket: basket,
      amount: paymentIntent.amount,
      created: paymentIntent.created
    })

      setProcessing(false);
      navigate("/orders", { state: { msg: "you have placed new order" } });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
 
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
              <ProductCard Product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
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
                  <button type="submit">
                    {Processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={15} />
                        <p>please wait</p>
                      </div>
                    ) : (
                      "pay now"
                    )}
                  </button>
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
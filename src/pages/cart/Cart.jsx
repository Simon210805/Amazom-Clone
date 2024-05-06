import React from 'react'
import { useContext } from 'react'
import LayOut from '../../components/layOut/LayOut'
import ProductCard from '../../components/product/ProductCard';
import { DataContext } from '../../components/dataProvider/DataProvider';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css'


function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket?.reduce((amount, item) => { item.price + amount }, 0);
    return (
      <LayOut>
        <section className={classes.container}>
          <div className={classes.cart_container}>
            <h2>Hello</h2>
            <h3>your shopping basket</h3>
            <hr />
            {basket?.length == 0 ? (
              <p>Your basket is empty</p>
            ) : (
              basket?.map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    Product={item}
                    renderdesc={true}
                    flex={true}
                    renderAddToCart={false}
                  />
                );
              })
            )}
          </div>
          {basket?.length !== 0 && (
            <div className={classes.total}>
              <div>
                <p>subTotal ({basket?.length} items)</p>
                <currencyFormat amount={total} />
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

export default Cart
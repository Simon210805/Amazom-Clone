import React, { useState, useEffect, useContext } from "react";
import LayOut from "../../components/layOut/LayOut";
import { DataContext } from "../../components/dataProvider/DataProvider";
import { db } from "../../utility/Firebase"
import classes from "./Orders.module.css";
import ProductCard from "../../components/product/ProductCard";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }else{
      setOrders([])
    }
    
  }, [])
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>
            your orders
          </h2>
          {
            orders?.length === 0 && <p style={{padding: "10px"}}>You don't have any orders.</p>
          }
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, index) => { 
              return (
                <div key={index}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {
                    eachOrder?.data?.basket?.map((eachItem) => {
                      return (
                        <ProductCard
                          flex={true}
                          Product={eachItem}
                          key={eachItem.id}
                        />
                      );
                    }
                    )
                  }
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;

import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../loder/Loader";
function Product() {
  const [Products, setProducts] = useState();
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {Products?.map((singleProduct) => (
            <ProductCard key={singleProduct.id} Product={singleProduct}
            renderAddToCart={true}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;

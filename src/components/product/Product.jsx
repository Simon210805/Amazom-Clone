import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
function Product() {
    const [Products, setProducts] = useState();
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res)
            setProducts(res.data)
        }).catch((err)=>console.log(err))
    }, [])
  return (
    <section className={classes.product_container}>
      {Products?.map((singleProduct) => (
        <ProductCard key={singleProduct.id} Product={singleProduct} />
      ))}
    </section>
  );
}

export default Product
import React, { useEffect, useState } from "react";
import LayOut from "../../components/layOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../api/EndPoints";
import classes from "./Results.module.css";
import ProductCard from "../../components/product/ProductCard";
function Results() {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((response) => {
          setResults(response.data);
          setIsLoading(false);
      })
      .catch((error) => {
          console.log(error);
          setIsLoading(false);
      });
  });

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>results</h1>
              <p style={{ padding: "30px" }}>category / {categoryName}</p>
              <hr />
              { isLoading ? (<div>Loader</div>) : (
                  
        <div className={classes.product_container}>
          {results?.map((Product) => (
            <ProductCard key={Product.id} Product={Product}
            renderAddToCart={true}/>
          ))}
        </div>
              )}
      </section>
    </LayOut>
  );
}

export default Results;

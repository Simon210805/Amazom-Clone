import React, { useEffect, useState } from "react";
import LayOut from "../../components/layOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../api/EndPoints";
import ProductCard from "../../components/product/ProductCard";
import Loader from "../../components/loder/Loader";
function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${productUrl}/products/${id}`)
        .then((response) => {
            console.log(response.data)
            setProduct(response.data)
            setIsLoading(false)
        }).catch((error) => {
            console.log(error)
            setIsLoading(false)
        })
    }, [id])
  return (
      <LayOut>
          {isloading ? (<Loader />) : (<ProductCard Product={product}
              flex={true}
              renderdesc={true}
              renderAddToCart={true}
          />)}
    </LayOut>
  );
}

export default ProductDetail;

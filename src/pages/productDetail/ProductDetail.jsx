import React, { useEffect, useState } from "react";
import LayOut from "../../components/layOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../api/EndPoints";
import ProductCard from "../../components/product/ProductCard";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get(`${productUrl}/products/${id}`)
        .then((response) => {
            console.log(response.data)
            setProduct(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [id])
  return (
    <LayOut>
        <ProductCard Product={product} />
    </LayOut>
  );
}

export default ProductDetail;

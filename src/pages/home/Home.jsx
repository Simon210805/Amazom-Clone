import React from 'react'
import LayOut from '../../components/layOut/LayOut'
import Carousel from '../../components/carausel/Carousel'
import Category from '../../components/category/Category'
import Product from '../../components/product/Product'
import Footer from '../../components/footer/Footer'
function Home() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
      <Footer />
    </LayOut>
  );
}

export default Home
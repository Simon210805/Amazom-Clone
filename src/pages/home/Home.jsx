import React from 'react'
import LayOut from '../../components/layOut/LayOut'
import Carousel from '../../components/carausel/Carousel'
import Category from '../../components/category/Category'
import Product from '../../components/product/Product'
function Home() {
  return (
      <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  )
}

export default Home
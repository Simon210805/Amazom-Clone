import React from 'react'
import Header from '../../components/header/Header'
import CarouselEffect from '../../components/carausel/Carousel'
import Category from '../../components/category/Category'
import Product from '../../components/product/Product'
function Home() {
  return (
      <div>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </div>
  )
}

export default Home
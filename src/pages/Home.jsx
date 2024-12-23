import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import Poojaitems from '../components/Poojaitems'
import Cart from '../components/Cart'




const Home = () => {
  return (
    <>
        <Navbar />
        <CategoryMenu/>
        <Poojaitems/>
        <Cart/>
    </>
  )
}

export default Home
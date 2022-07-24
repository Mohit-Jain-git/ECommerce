import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Register from './Register'


const Home = () => {
  return (
    <div>
      <Announcements></Announcements>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div >
  )
}

export default Home
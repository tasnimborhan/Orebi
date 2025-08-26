import React, { useState } from 'react'
import Container from './pages/Container'
import Flex from './pages/Flex'
import Product from '../Product'
import Clock from "/src/assets/Clock.png"
import Watch from "/src/assets/Watch.png"
import Basket from "/src/assets/Basket.png"
import Plushie from "/src/assets/Plushie.png"
// ======================
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '../NextArrow'
import PrevArrow from '../PrevArrow'
import axios from 'axios'
import { useEffect  } from 'react'

// =======================


const NewArrival = () => {
  let [allData,setAllData]= useState([]);
  useEffect (() => {
     async function allData (){
      let data=await axios.get ("https://dummyjson.com/products")
      setAllData(data.data.products);
     }
     allData()
  },[])
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow/>,
     prevArrow: <PrevArrow />
  };
  return (
   <>
    <Container>
       <h3 className="text-3xl font-bold">New Arrivals</h3>
      <Slider {...settings}>
        {allData.map((item)=>(
      <div>
        <Product
         productImg={item.thumbnail}
         Btxt={item.price}
         title={item.title}
         />
      </div>
      ))}
    </Slider>
    </Container>
 
   </>
  )
}

export default NewArrival
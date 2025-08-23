import React from 'react'
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

// =======================


const NewArrival = () => {
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
      <div>
        <Product productImg={Clock} Btxt={"10%"}/>
      </div>
      <div>
        <Product productImg={Watch} Btxt={"New"}/>
      </div>
      <div>
         <Product productImg={Basket} Btxt={"Sale"}/>
      </div>
      <div>
       <Product productImg={Plushie} Btxt={"New"}/>
      </div>
      <div>
        <Product productImg={Clock} Btxt={"10%"}/>
      </div>
      <div>
        <Product productImg={Watch} Btxt={"New"}/>
      </div>
      <div>
         <Product productImg={Basket} Btxt={"Sale"}/>
      </div>
      <div>
        <Product productImg={Clock} Btxt={"10%"}/>
      </div>
      <div>
        <Product productImg={Watch} Btxt={"New"}/>
      </div>
      <div>
         <Product productImg={Basket} Btxt={"Sale"}/>
      </div>
      
    </Slider>
    </Container>
 
   </>
  )
}

export default NewArrival
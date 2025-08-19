import React from 'react'
import Container from './pages/Container'
import Flex from './pages/Flex'
import Product from '../Product'
import Clock from "/src/assets/Clock.png"
import Watch from "/src/assets/Watch.png"
import Basket from "/src/assets/Basket.png"
import Plushie from "/src/assets/Plushie.png"


const NewArrival = () => {
  return (
   <>
  <div classNAme="py-6">
    <Container>
        <h3 className="text-3xl font-bold">New Arrivals</h3>
        <Flex className="gap-x-8">
            <Product productImg={Clock} Btxt={"10%"}/>
            <Product productImg={Watch} Btxt={"New"}/>
            <Product productImg={Basket} Btxt={"Sale"}/>
            <Product productImg={Plushie} Btxt={"New"}/>
        </Flex>
    </Container>
  </div>
   </>
  )
}

export default NewArrival
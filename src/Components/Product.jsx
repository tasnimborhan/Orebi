import React from 'react'
import Image from './layouts/pages/Image'
import Clock from "/src/assets/Clock.png"
import Badge from './Badge'
import Flex from './layouts/pages/Flex'
import { FaHeart } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { addtocart } from '../slices/addToCartSlice'
import { useDispatch } from 'react-redux'

const Product = ({productImg,Btxt,title,price}) => {
  let dispatch= useDispatch()
  let handleAddtocart =()=>{
  dispatch (addtocart({
    title : title,
    price: price,
    productImg: productImg,
    quantity:1 
  }))
  }

  return (
   <>
   <div className=" py-10 group">
   <div className="relative px-4">
    <Badge className={"absolute top-5 left-5"} badgetxt={Btxt}/>
   <Image imgSrc={productImg} className={"w-full"}/>
   <div className="bg-transparent p-4 opacity-0 group-hover:opacity-100 absolute w-full left-0 bottom-6 duration-700">
      <div className="flex items-center justify-end gap-x-3">
        <h3>Add To Wishlist</h3>
        <FaHeart />
      </div>
       <div className="flex items-center justify-end gap-x-3">
        <h3>Compare</h3>
       <FiRefreshCw />
      </div>
       <div className="flex items-center justify-end gap-x-3" onClick={handleAddtocart}>
        <h3>Add To Cart</h3>
        <FaCartShopping />
      </div>
   </div>
    <Flex className="justify-between">
      <h3>CLock</h3>
      <h3>$50</h3>
    </Flex>
   </div>
   </div>
   </>
  )
}

export default Product
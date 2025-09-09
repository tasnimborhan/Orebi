import React from 'react'
import { Link } from 'react-router-dom'
import Container from './pages/Container'
import Flex from './pages/Flex'
import Image from './pages/Image'
import logo from "/src/assets/logo.png"
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from 'react'
import { useSelector } from 'react-redux'



const Header = () => {
  let [showCart, setShowCart]= useState(false)
   let data = useSelector((state)=>state.addcart.value)
  return (
    <>
   <div className="py-[30px]">
    <Container>
      <Flex className="justify-between">
        <div clasName="w-[40%]">
         <Link to={"/"}> <Image imgSrc={logo}/></Link>
        </div>
        <div className="w-[60%]">
          <ul className="flex gap-x-15 text-menuColor text-15">
            <Link to={"/"}><li className="hover:text-menuHover hover:font-bold duration-500 ">Home</li></Link>
            <Link to={"/shop"} ><li className="hover:text-menuHover hover:font-bold duration-500 ">Shop</li></Link>
            <Link to={"/about"} ><li className="hover:text-menuHover hover:font-bold duration-500 ">About</li></Link>
            <Link to={"/"} ><li className="hover:text-menuHover hover:font-bold duration-500 ">Contacts</li></Link>
            <Link to={"/"} ><li className="hover:text-menuHover hover:font-bold duration-500 ">Journal</li></Link>
          </ul>
        </div>
      </Flex>
    </Container>
   </div>
   <div className="bg-[#f5f5f3] py-[25px]">
    <Container>
      <Flex className={'justify-between'}>
      <div className="flex items-center gap-x-3">
        <FaBarsStaggered />
        <h3>Shop By Category</h3>
      </div>
      <div className="relative">
        <input type="text" placeholder='Search Products'className="py-4 px-5 w-[600px] bg-white outline-0" />
          <FaSearch className="absolute right-5 top-1/2 -translate-y-2"/>
      </div>
      <div className="flex gap-x-6 relative">
       <div className="flex">
        <FaUser />
        <FaCaretDown />
        </div>
        <FaShoppingCart   onClick={()=>setShowCart(!showCart)}/>
      </div>

      </Flex>
      {showCart &&
      <div classname="h-screen w-[600px] bg-blue-400 absolute right-0 top-0 ">
      <ImCross onClick={()=>setShowCart(!showCart)} />
         <ul>
          <div className="flex bg-slate-300 p-5 justify-between font-semibold">
            <li> Name</li>
            <li> Price</li>
             <li> Quantity</li>


          </div>
                      {data.map(item=>(
                      <div className="flex justify-between p-5">
                        <li>{item.title}</li>
                        <li>{item.price}</li>
                        <li>{item.quantity}</li>
                        <li><img className="w-30" src={item.productImg}  /></li>
                        
                       
                      </div>
                       
                        ))
                      }
          </ul>
      </div>
      }
    </Container>
   </div>
    </>
  )
}

export default Header 
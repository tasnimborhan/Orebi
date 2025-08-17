import React from 'react'
import Container from './pages/Container'
import Flex from './pages/Flex'
import { Link } from 'react-router-dom'
import Image from './pages/Image'
import logo from "/src/assets/logo.png"

const Footer = () => {
  return (
    <>
    <div className="bg-[#f5f5f3] py-[55px]">
      <Container>
        <Flex className={"justify-between"} >
          <div className="">
            <h3 className="font-bold">MENU</h3>
            <ul className=" text-menuColor text-15">
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Home</li></Link>
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Shop</li></Link>
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">About</li></Link>
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Contacts</li></Link>
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Journal</li></Link>
          </ul>
          </div>
          <div className="">
            <h3 className="font-bold">SHOP</h3>
            <ul className=" text-menuColor text-15">
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Category 1</li></Link>
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Category 2</li></Link>
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Category 3</li></Link>
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Category 4</li></Link>
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Category 5</li></Link>
          </ul>
          </div>
          <div className="">
            <h3 className="font-bold" >HELP</h3>
            <ul className=" text-menuColor text-15">
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Privacy Policy</li></Link>
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Terms & Conditions</li></Link>
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Special E-shop</li></Link>
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Shipping</li></Link>
            <Link><li className="hover:text-menuHover hover:font-bold duration-500 ">Secure Payments</li></Link>
          </ul>
          </div>
          <div className="">
            <h3 className="text-xl font-bold">(052) 611-5711</h3>
            <h4 className="text-xl font-bold">company@domain.com</h4>
            <p className="text-sm mt-8">575 Crescent Ave. Quakertown, PA 18951</p>
          </div>
          <div className="">
            <Image imgSrc={logo} />
          </div>
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Footer 
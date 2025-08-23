import React from 'react'
import { MdNavigateNext } from "react-icons/md";

const NextArrow = (props) => {
 const {   onClick } = props;
  return (
    <div
      className={"text-4xl absolute right-5 top-1/2 -translate-y-1/2 "}
     
      onClick={onClick}
    > <MdNavigateNext /></div>
  )
}

export default NextArrow
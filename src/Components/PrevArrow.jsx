import React from 'react'
import { GrFormPrevious } from "react-icons/gr";

const PrevArrow = (props) => {
    const {   onClick } = props;
  return (
    <div
    className={"text-4xl absolute left-5 top-1/2 -translate-y-1/2 z-10 "}
        
    onClick={onClick}
    > <GrFormPrevious /></div>
  )
}

export default PrevArrow
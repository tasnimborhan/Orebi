import React from 'react'
import Container from './pages/Container'
import Flex from './pages/Flex'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa6";
import { FaUndo } from "react-icons/fa";

const Policy = () => {
    return (
        <>
         <div className="py-5 ">
            <Container>
                <Flex className={"justify-between"}>
                    <div className="flex gap-x-2 items-center">
                   <PiNumberTwoBold />
                   <h3>Two Years Warranty</h3>
                    </div>
                    <div className="flex gap-x-2 items-center">
                   <FaTruck />
                   <h3>Free Shipping</h3>
                    </div>
                    <div className="flex gap-x-2 items-center">
                   <FaUndo />
                   <h3>Return policy in 30 days</h3>
                    </div>
                 
                </Flex>
            </Container>
         </div>
        </>
    )
}

export default Policy
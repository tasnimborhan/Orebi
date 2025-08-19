import React from 'react'
import Container from './pages/Container'
import Flex from './pages/Flex'
import Image from './pages/Image'
import { Link } from 'react-router-dom'
import Ad1 from "/src/assets/Ad1.png"
import Ad2 from "/src/assets/Ad2.png"
import Ad3 from "/src/assets/Ad3.png"

const Ads = () => {
  return (
    <>
    <div className="py-50">
        <Container>
            <Flex className="justify-between">
                <div className="w-[48%]">
                   <Link to={'/'}>
                   <Image imgSrc={Ad1} className="w-[full]"/>
                   </Link>

                </div>
                <div className="w-[48%]">
                     <Link to={'/'}>
                   <Image imgSrc={Ad2} className="w-[full]"/>
                   </Link>
                    <Link to={'/'}>
                   <Image imgSrc={Ad3} className="w-[full] mt-8"/>
                   </Link>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Ads
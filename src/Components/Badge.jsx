import React from 'react'

const Badge = ({className, badgetxt }) => {
  return (
    <>
    <div className={`py-2 px-[30px] w-[90px] bg-black text-white ${className}`}>

        {badgetxt}
    </div>
    </>
  )

}

export default Badge
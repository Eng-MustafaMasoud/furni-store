import React from 'react'
import couch from '@/public/images/spinner-5.gif'
import Image from 'next/image'
const Loader = () => {
  return (
    <div  className="flex flex-col h-screen items-center  justify-center  w-full scrollbar-hide overflow-hidden ">
        <Image src={couch} alt="couch" className=' object-contain'/>
        
    </div>
  )
}

export default Loader
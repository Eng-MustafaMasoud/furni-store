"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
const Blogs = () => {

    const pathname:any=usePathname()
  
  return (
    <div>Blog {pathname} </div>
  )
}

export default Blogs
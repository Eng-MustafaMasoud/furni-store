"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
const page = () => {

    const pathname:any=usePathname()
    console.log(pathname)
  return (
    <div>Blog {pathname} </div>
  )
}

export default page
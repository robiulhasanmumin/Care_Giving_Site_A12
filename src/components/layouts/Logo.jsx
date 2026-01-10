 import Link from 'next/link'
import React from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa'
 
const Logo = () => {
  return (
    <Link href={"/"} className='flex items-center gap-2'>
      <FaHandHoldingHeart className='text-2xl text-primary'/>
       <h2 className='text-2xl font-bold'>Care<span className='text-primary'>.People</span></h2>
    </Link>
  )
}

export default Logo
 import ServiceSkalaton from '@/components/skelaton/ServiceSkalaton'
import React from 'react'

const loading = () => {
  return (
<div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-32'>
       {
        [...Array(3)].map((_,index)=>(
          <ServiceSkalaton key={index}></ServiceSkalaton>
        ))
       }
    </div>
  )
}

export default loading
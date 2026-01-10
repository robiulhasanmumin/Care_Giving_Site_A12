import { getServices } from '@/actions/server/services';
import { AllServices } from '@/components/home/AllServices'
import React from 'react'

const ServicePage = async () => {
        const allServices = (await getServices()) || []; 
  return (
    <div>
      <AllServices allServices={allServices}/>
    </div>
  )
}

export default ServicePage
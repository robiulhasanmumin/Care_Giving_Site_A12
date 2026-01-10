"use server"

import { collections, dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"

export const getServices=async ()=>{
  const products = await dbConnect(collections.SERVICES).find().toArray()
  return products
}

export const getSingleService=async (id)=>{
  if(id.length != 24){
    return {}
  }
  const query = {_id: new ObjectId(id)}
  const product = await dbConnect(collections.SERVICES).findOne(query)
  return {...product , _id:product._id.toString()} || {}
}
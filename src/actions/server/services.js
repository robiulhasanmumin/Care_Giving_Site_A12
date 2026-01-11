"use server"

import { collections, dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"

 export const getServices = async () => {
  try {
    const servicesCollection = dbConnect(collections.SERVICES);
    const services = await servicesCollection.find().toArray();
    console.log("services -- 11", services );
    
     if (!services || services.length === 0) {
      console.log("No data found in MongoDB services collection");
      return [];
    }

    return services.map(item => ({
      ...item,
      _id: item._id.toString() 
    }));
  } catch (error) {
    console.error("MongoDB Fetch Error:", error);
    return [];
  }
}



export const getSingleService = async (id) => {
  try {
     if (!id || id.length !== 24) {
      return null; 
    }

    const query = { _id: new ObjectId(id) };
    const product = await dbConnect(collections.SERVICES).findOne(query);

     if (!product) {
      return null;
    }

     return { ...product, _id: product._id.toString() };

  } catch (error) {
    console.error("Error fetching single service:", error);
    return null;
  }
};
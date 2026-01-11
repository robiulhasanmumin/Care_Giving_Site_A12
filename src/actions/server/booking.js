"use server"

import { collections, dbConnect } from "@/lib/dbConnect"
import { sendInvoiceEmail } from "@/lib/sendEmail";
import { ObjectId } from "mongodb";

export const createBooking=async(bookingData)=>{
  try {
     const result = await dbConnect(collections.BOOKINGS).insertOne({
      ...bookingData,
      status: "Pending",
      createdAt: new Date(),
     })
     if (result.acknowledged) {
      await sendInvoiceEmail(bookingData);
      return { success: true, id: result.insertedId.toString() };
    }
    return { success: false };
  
  } catch (error) {
    console.error("Booking Error",error)
    return {success:false}
  }

}


export const getUserBookings = async (email) => {
  try {
    const db = await dbConnect(collections.BOOKINGS);
    const result = await db.find({ userEmail: email }).sort({ createdAt: -1 }).toArray();
    
     return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
};


 export const cancelBooking = async (id) => {
  try {
    const db = await dbConnect(collections.BOOKINGS);
    const result = await db.deleteOne({ _id: new ObjectId(id) });
    return result.acknowledged;
  } catch (error) {
    return false;
  }
};
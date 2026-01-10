"use server"
import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
    const { email, password, name, nid, contact } = payload;

    if (!email || !password) return null;

    const isExist = await dbConnect(collections.USERS).findOne({ email });
    if (isExist) return { error: "User already exists!" };

    const newUser = {
        provider: "credentials",
        name,
        email,
        nid,
        contact,
        password: await bcrypt.hash(password, 14),
        role: "user"
    };

    const result = await dbConnect(collections.USERS).insertOne(newUser);
    if (result.acknowledged) {
        return { success: true, insertedId: result.insertedId.toString() };
    }
    return null;
};



export const loginUser=async(payload)=>{

    const {email,password} = payload;

    // check payload
    if(!email || !password) return null

    // check user
    const user = await dbConnect(collections.USERS).findOne({email})
    if(!user) return null
     const isMatched = await bcrypt.compare(password, user.password)
    if(isMatched){
      return user
    } else {
      return null
    }
 }
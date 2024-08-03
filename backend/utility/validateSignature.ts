import { Request } from "express";
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from "../config";

export const ValidateSignature = async(req: Request) => { 
    const signature = req.get("Authorization"); 
    if(signature) { 
        const payload = await jwt.verify(signature.split(' ')[1], JWT_SECRET_KEY);
        return true; 
    }
    return false;
}
import { Request, Response } from "express";
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { JWT_SECRET_KEY } from "../config";

export const blacklist = new Set(); 

export const ValidateSignature = async(req: Request, res: Response) => { 
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new JsonWebTokenError('jwt must be provided');
    }
    const token = authHeader; 
    console.log(token);
    if (!token) {
        throw new JsonWebTokenError('jwt must be provided');
    }
    if (blacklist.has(token)) {
        return res.status(401).json({ message: 'Token is invalid' });
    }
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return reject(err);
            }
            resolve(decoded);
        });
    });
}


export const destroySignature = async(req: Request, res: Response) => {
    const token = req.headers.authorization;
    console.log(blacklist);
    console.log(token);
    // blacklist.add(token); 
    // res.json({ message: 'Logged out successfully' });
} 
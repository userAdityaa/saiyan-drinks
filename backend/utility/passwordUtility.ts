import bcrypt from 'bcrypt';
import { JWT_SECRET_KEY } from '../config';
import jwt from 'jsonwebtoken'
import { UserPayload } from '../dto/user.dto';

export const GenerateSalt = async() => { 
    return await bcrypt.genSalt(12);
}

export const GeneratePassword = async(password: string, salt: string) => { 
    return await bcrypt.hash(password, salt);
}

export const ValidatePassword = async(enteredPassword: string, savedPassword: string, salt: string) => { 
    return await GeneratePassword(enteredPassword, salt) == savedPassword; 
}

export const GenerateSignature = async(payload: UserPayload) => { 
    return jwt.sign(payload,  JWT_SECRET_KEY, {expiresIn: '24h'});
}
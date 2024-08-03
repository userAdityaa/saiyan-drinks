import {Request, Response, NextFunction} from "express";
import { UserInput } from "../dto/user.dto";
import { User } from "../models";
import { GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } from "../utility/passwordUtility";

export const helloUser = async(req: Request, res: Response, next: NextFunction) => {
    return res.json({message: 'Hello User'});
}

export const SignUpUser = async(req: Request, res: Response, next: NextFunction) => {
    const {username, email, password} = <UserInput> req.body;
    console.log(username, email, password);
    const existingUser = await User.findOne({email: email});
    if(existingUser) { 
        return res.json({message: 'User already exists'});
    }
    else { 
        const salt = await GenerateSalt(); 

        const userPassword = await GeneratePassword(password, salt);
        const newUser = await User.create({username, email, password: userPassword, salt: salt});
        newUser.save();
        return res.json(newUser);
    }   
}

export const SignInUser = async(req: Request, res: Response, next: NextFunction) => {
    const {email, password} = <UserInput> req.body;
    const existingUser = await User.findOne({email: email});  
    
    if(existingUser) { 
        const storedSalt = existingUser.salt;
        if(await ValidatePassword(password, existingUser.password, storedSalt)) { 
            const signature = await GenerateSignature({email: existingUser.email});
            // console.log(signature);
            return res.json({signature});
        }
        else { 
            return res.json({message: 'Invalid User'});
        }
    }
    else { 
        return res.json({message: 'User does not exist'});
    }
}
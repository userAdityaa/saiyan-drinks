import {Request, Response, NextFunction} from "express";
import { UserInput, UserPayload } from "../dto/user.dto";
import { User } from "../models";
import { Order } from "../models/order_model";
import { destroySignature, ValidateSignature } from "../utility/validateSignature";
import { GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } from "../utility/passwordUtility";
import mongoose from "mongoose";

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

export const validateUser = async(req: Request, res: Response, next: NextFunction) => { 
    const user = await ValidateSignature(req, res) as UserPayload; 
    // console.log("user hain bhai yahi")
    // console.log(user);
    const userEmail = user['email'];
    if (await ValidateSignature(req, res)) {
        console.log('user validated');
        return res.status(200).json({ userEmail });
    } else {
        return res.status(401).json({ message: 'Invalid User' });
    }
}

export const SignInUser = async(req: Request, res: Response, next: NextFunction) => {
    const { email, password } = <UserInput> req.body;
    const existingUser = await User.findOne({ email: email });  
    
    if (existingUser) { 
        const storedSalt = existingUser.salt;
        if (await ValidatePassword(password, existingUser.password, storedSalt)) { 
            // Generate signature and respond with token
            const token = await GenerateSignature({ email: existingUser.email });
            console.log('User signed in');
            return res.json({ token });  // Send token in response
        } else { 
            return res.status(401).json({ message: 'Invalid User' });  // Unauthorized
        }
    } else { 
        return res.status(404).json({ message: 'User does not exist' });  // Not Found
    }
}

export const logoutUser = async(req: Request, response: Response, next: NextFunction) => {
    destroySignature(req, response);
}

export const orderDrinks = async(req: Request, res: Response, next: NextFunction) => {
    // const {drinks, userEmail} = req.body;
    // const user = await User.findOne({email: userEmail});
    // if (!Array.isArray(drinks) || !drinks.every(d => 
    //     typeof d.drink === 'string' &&
    //     typeof d.quantity === 'number' &&
    //     typeof d.price === 'number' &&
    //     typeof d.image === 'string')) {
    //     return res.status(400).json({ error: 'Invalid drinks data' });
    // } 
    // const newOrder = await Order.create({ user, drinks });
    // await newOrder.save();
    // // console.log(user);
    // user!.order.push(newOrder._id);
    // await user!.save(); 

    try {
        const { drinks, userEmail } = req.body;

        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (!Array.isArray(drinks) || !drinks.every(d =>
            typeof d.drink === 'string' &&
            typeof d.quantity === 'number' &&
            typeof d.price === 'number' &&
            typeof d.image === 'string'
        )) {
            return res.status(400).json({ error: 'Invalid drinks data' });
        }

        const newOrder = await Order.create({ user, drinks });
        await newOrder.save();

        if (!Array.isArray(user.order)) {
            user.order= [];
        }

        user.order.push(newOrder._id as mongoose.Types.ObjectId);
        await user.save();

        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (error) {
        next(error);
    }
}

export const getUserOrder = async(req: Request, res: Response, next: NextFunction) => { 
    const user = await ValidateSignature(req, res) as UserPayload; 
    const userEmail = user['email'];
    const databaseUser = await User.findOne({email: userEmail}); 
    const order = databaseUser!.order;
    let orderContainer = [];
    for(let i = 0; i < order.length; i++) { 
        // orderContainer.push(await Order.findById(order[i]).drinks);
        const orderData = await Order.findById(order[i]);
        const drinks = orderData!.drinks;
        orderContainer.push(drinks);
    }
    // console.log(orderContainer);
    return res.status(200).json({ orderContainer });
}
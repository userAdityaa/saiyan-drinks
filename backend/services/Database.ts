import { Application } from 'express'; 
import mongoose from 'mongoose';
import { MONGO_URI } from '../config';

export default async(app: Application) => {
    try { 
        await mongoose.connect(MONGO_URI); 
        console.log('Connected to MongoDB');
    }
    catch(e) { 
        console.error(e);
    }
}
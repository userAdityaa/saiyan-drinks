import express, { Application } from 'express'; 
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import { MONGO_URI } from '../config';


export default async(app: Application) => { 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    return app;
}


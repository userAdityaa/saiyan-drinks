import express, { Application } from 'express'; 
import bodyParser from 'body-parser';
import { UserRoutes } from '../routes/user_routes';
import cors from 'cors';

export default async (app: Application) => { 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use(cors({
        origin: 'http://localhost:3001',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }));
    
    app.options('*', cors()); // Handles preflight requests
    
    app.use('/user', UserRoutes);
    
    return app;
}

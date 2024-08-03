import express from 'express';
import App from './services/ExpressApp';
import dbConnection from './services/Database';
import cors from 'cors'

const startServer = async() => { 
    const app = express(); 
    await dbConnection(app);
    await App(app);

    app.listen(8000, () => {
        console.log(`Server is running at http://localhost:8000`)
    })
}


startServer();
import express from 'express';
import { connectToDatabase } from "./services/database.service";
import { seriesRouter } from "./routes/series.router";
import {authRouter} from './routes/auth.router'
import  swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import path from 'path'
const app = express();
const port = 8080; // default port to listen

//Documentation
const swaggerOptions = {
    definition: {
        openapi:'3.0.0',
        info:{
            title: 'Backend Reto Final Etapa 3',
            version: '3.0.0',
            contact: {
                name: 'Juan Manuel Hoyos Contreras', 
                email: 'juanhoyos1347@gmail.com'
            }
        },
        servers: [
            {
                url:'http://localhost:8080'
            }
        ]
    },
    apis: ['./dist/docs/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


connectToDatabase()
    .then(() => {
        // send all calls to /games to our gamesRouter
        app.use("/series", seriesRouter);
        app.use('/auth',authRouter)

        // start the Express server
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });

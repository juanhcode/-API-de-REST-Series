import express from 'express';
import { connectToDatabase } from "./services/database.service";
import { seriesRouter } from "./routes/series.router";
import  swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import path from 'path'
const app = express();
const port = 8080; // default port to listen

//Documentation
const swaggerOptions = {
    definition: {
        openapi:'3.0.0',
    },
    swaggerDefinition: {
        info: {
            title: 'API REST Academia', 
            description: 'Esta es la documentación de la API Academia, creada en la sesión de clases de backend para demostrar el uso de Swagger', 
            contact: {
                name: 'Juan Manuel Hoyos Contreras', 
                email: 'juanhoyos1347@gmail.com'
            }, 
            servers: ['http://localhost:3800'], 
            version: '1.0'
        }
    }, 
    apis: [`${path.join(__dirname, './Routes/*.js')}`]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


connectToDatabase()
    .then(() => {
        // send all calls to /games to our gamesRouter
        app.use("/series", seriesRouter);

        // start the Express server
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });

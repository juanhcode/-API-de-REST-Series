import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { collections } from "../services/database.service";
import { createValidator } from 'express-joi-validation';
import {decodeToken} from '../firebase/manage.token'

//Schemas
import serieSchema from '../schemas/serie.schema'

//Validator schema Joi
const validator = createValidator();


export const seriesRouter = express.Router();

//Middlewares
seriesRouter.use(express.json());


seriesRouter.get("/",decodeToken, async (_req: Request, res: Response) => {
    try {
        const serie = await collections.series.find({}).toArray();
        res.status(200).send(serie);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


seriesRouter.get("/:id",decodeToken, async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const query = { _id: new ObjectId(id) };
        const serie = await collections.series.findOne(query);

        if (serie) {
            res.status(200).send(serie);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});
seriesRouter.post("/",validator.body(serieSchema),decodeToken, async (req: Request, res: Response) => {
    try {
        const newSerie = req.body;
        console.log("Hola");
        const result = await collections.series.insertOne(newSerie);
        result
            ? res.status(201).send(`Successfully created a new serie with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new serie.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

seriesRouter.put("/:id",validator.body(serieSchema),decodeToken, async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedSerie = req.body;
        const query = { _id: new ObjectId(id) };
        // $set adds or updates all fields
        const result = await collections.series.updateOne(query, { $set: updatedSerie });

        result
            ? res.status(200).send(`Successfully updated serie with id ${id}`)
            : res.status(304).send(`Game with id: ${id} not updated`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

seriesRouter.delete("/:id",decodeToken, async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.series.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed serie with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove serie with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Game with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

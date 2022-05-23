import express, { Request,Response } from 'express'; 
import auth from '../firebase/auth'
export const authRouter = express.Router();
import validator from '../utilities/utilities'
import authSerieSchema from '../schemas/serie.auth.schema';

authRouter.use(express.json());

//Servicio de crear usuario
authRouter.post('/createUser',validator.body(authSerieSchema), async (_req: Request, _res: Response) => {
    try{
        const { email,password } = _req.body;
        const result = await auth.createUser(email,password); 
        _res.status(201).send(result);
    }catch(err){
        _res.status(500).send(err.message);
    }
    
})


//Servicio de iniciar sesion
authRouter.post('/logIn',validator.body(authSerieSchema), async (_req: Request, _res: Response) => {
    try{
        const { email,password } = _req.body;
        const result = await auth.logIn(email,password); 
        _res.status(201).send(result);
    }catch(err){
        _res.status(500).send(err.message);
    }
    
})
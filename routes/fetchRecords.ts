import express, {Application, Response, Request, NextFunction} from 'express';
import { getAllDatabaseEntry} from "../controllers/controller"
const router = express.Router()

router.get('/', (req:Request, res:Response, next:NextFunction)=>{
    getAllDatabaseEntry(req, res)
})

export default router;
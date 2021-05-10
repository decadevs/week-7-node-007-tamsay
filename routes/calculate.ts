import express, {Application, Response, Request, NextFunction} from 'express';
import {areaOfCircle, areaOfSquare, areaOfTriangle, areaOfRectangle} from "../controllers/controller"
const router = express.Router()

router.post('/circle', (req:Request, res:Response, next:NextFunction)=>{
    areaOfCircle(req, res)
})

router.post('/square', (req:Request, res:Response, next:NextFunction)=>{
    areaOfSquare(req, res)
})

router.post('/triangle', (req:Request, res:Response, next:NextFunction)=>{
    areaOfTriangle(req, res)
})

router.post('/rectangle', (req:Request, res:Response, next:NextFunction)=>{
    areaOfRectangle(req, res)
})


export default router;
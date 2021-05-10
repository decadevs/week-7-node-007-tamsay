/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Response, Request} from 'express';
import { getAllData, calculateAreaOfCircle, calculateAreaOfRectangle, calculateAreaOfSquare, calculateAreaOfTriangle} from '../models/model'


/**
 * @description - Gets all the entries in the database
 * @param req - Incoming request parameter    
 * @param res - Outgoing response result
 * @route GET /fetchRecords
 * @returns - A JSON Object containing all data entries in the database 
 */
const getAllDatabaseEntry =async (req : Request , res : Response)=>{
      try {
            const data = await getAllData()
            res.writeHead(200, {'Content-Type':'application/json'})
            return res.end(data)   
      } catch (error) {
            res.writeHead(404, {'Content-Type':'application/json'})
            res.end(JSON.stringify({message: error}))  
      }
}


/**
 * @description Calculates the area of a circle and ends the post request
 * @param req Incoming request parameter
 * @param res Incoming request parameter
 * @route POST /calculate/circle
 * @returns - A JSON Object showing the details of the proifle added to the database
 */
const areaOfCircle = async (req:Request, res:Response) =>{
    try {
        const output = JSON.stringify(req.body)
        const body = JSON.parse(output)

        const newEntry = await calculateAreaOfCircle(body);

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(newEntry)
        
    } catch (error) {
        res.writeHead(404, {'Content-Type':"application/json"})
        res.end(JSON.stringify({message: error}))
    }
}

/**
 * @description Calculates the area of a rectangle and ends the post request
 * @param req Incoming request parameter
 * @param res Incoming request parameter
 * @route POST /calculate/rectangle
 * @returns - A JSON Object showing the details of the proifle added to the database
 */
 const areaOfRectangle = async (req:Request, res:Response) =>{
    try {
        const output = JSON.stringify(req.body)
        const body = JSON.parse(output)

        const newEntry = await calculateAreaOfRectangle(body);

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(newEntry)
        
    } catch (error) {
        res.writeHead(404, {'Content-Type':"application/json"})
        res.end(JSON.stringify({message: error}))
    }
}
/**
 * @description Calculates the area of a square and ends the post request
 * @param req Incoming request parameter
 * @param res Incoming request parameter
 * @route POST /calculate/square
 * @returns - A JSON Object showing the details of the proifle added to the database
 */
 const areaOfSquare = async (req:Request, res:Response) =>{
    try {
        const output = JSON.stringify(req.body)
        const body = JSON.parse(output)

        const newEntry = await calculateAreaOfSquare(body);

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(newEntry)
        
    } catch (error) {
        res.writeHead(404, {'Content-Type':"application/json"})
        res.end(JSON.stringify({message: error}))
    }
}

/**
 * @description Calculates the area of a triangle and ends the post request
 * @param req Incoming request parameter
 * @param res Incoming request parameter
 * @route POST /calculate/triangle
 * @returns - A JSON Object showing the details of the proifle added to the database
 */
 const areaOfTriangle = async (req:Request, res:Response) =>{
    try {
        const output = JSON.stringify(req.body)
        const body = JSON.parse(output)

        const newEntry = await calculateAreaOfTriangle(body);

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(newEntry)
        
    } catch (error) {
        res.writeHead(404, {'Content-Type':"application/json"})
        res.end(JSON.stringify({message: error}))
    }
}

export {getAllDatabaseEntry, areaOfCircle, areaOfRectangle, areaOfSquare, areaOfTriangle};
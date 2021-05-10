import express, {Response, Request} from "express"

const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).send(`Shapes Area Calculator Page. Kindly visit ${req.url}fetchRecords - to see all operations performed`)
})

export default router;
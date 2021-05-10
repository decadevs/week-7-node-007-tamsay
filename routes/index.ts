import express, {Response, Request} from "express"

const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).send(`Shapes Area Calculator Homepage. Kindly visit ${req.protocol}://${req.get('host')}/fetchRecords - to see all operations performed`)
})

export default router;
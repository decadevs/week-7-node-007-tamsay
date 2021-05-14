import cookieParser from 'cookie-parser';
import logger from 'morgan';
import createError from "http-errors";
import express, {Application, Response, Request, NextFunction} from 'express';
import * as dotenv from "dotenv";
dotenv.config();
import fetchRecords from './routes/fetchRecords'
import calculate from './routes/calculate'
import indexRoute from './routes/index'


const port = process.env.PORT || 6000;
const app : Application = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/" , indexRoute), 
app.use('/fetchRecords', fetchRecords)
app.use('/calculate', calculate)

// catch 404 and forward to error handler
app.use(function(req : Request, res : Response, next: NextFunction) {
    next(createError(404));
});
  
// error handler
app.use(function(err: { message: string; status: number; }, req : Request, res : Response, next : NextFunction) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.send('Page Not Found');
});

app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})

module.exports = app;
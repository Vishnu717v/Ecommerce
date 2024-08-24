import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import conectDB from './config/db.js';
import authRoute from './routes/authRoute.js'


// config env
dotenv.config();
//database config

conectDB();

// rest object
const app=express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("./routes/authRoute.js",authRoute)

// rest app
app.get('/',(req,res)=>{
    res.send("hello");

})

//port
const PORT=process.env.PORT || 3001;
//server
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bold.white);
})


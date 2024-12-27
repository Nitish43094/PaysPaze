const express = require('express')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const userRouter = require('./route/index');
const dbConncet = require('./config/database')
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
)
dbConncet();
app.use("/payspaze-project",userRouter);
app.get('/',(req,res)=>{
    return res.json({
        success:true,
        message:"Your Server is Running.....",
    })
})

app.listen(PORT,(req,res)=>{
    console.log("App is Running at PORT.......",PORT);
})
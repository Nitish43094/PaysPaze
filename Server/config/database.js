const mongoose = require('mongoose');
require('dotenv').config();

const dbConncet = () =>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Connection Successfully")
    })
    .catch((error)=>{
        console.log("Connection Faild")
        console.error(error);
        process.exit(1);
    })
}

module.exports = dbConncet;
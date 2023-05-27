const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URI

async function connectDB(){

    try {
        await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true})
        console.log("connecting")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB;
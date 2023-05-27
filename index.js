const express = require("express");
const connectDB = require("./config");
require("dotenv").config();
require("./config")

const port = process.env.PORT

const app=express();

app.listen(port, () => {
    console.log(`listeining to ${port} `)
    connectDB()
})
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://0.0.0.0:27017/mydb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connected successfully.")
},
error=>{
    console.log("Database connection error: "+error)
})


const listinRoutes = require("./routes/listing");

app.use(express.json());

app.use("/api/listings", listinRoutes);

app.listen(4000, ()=> console.log("server running on port 4000"));
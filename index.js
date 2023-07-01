const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const studentRoute = require("./Routes/studentRoute.js");

dotEnv.config();

mongoose.connect(process.env.DATABASE_URL).
then(()=>{
    console.log("Connected to Database");
}).catch((err)=>{
    console.log(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

app.get("/", (req, res)=>{
    res.send("Connected to Server and running");
});

app.listen(process.env.PORT, ()=>{
    console.log("Connected to Server");
})

app.use("/student", studentRoute);
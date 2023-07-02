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
// const fs = require('fs');
// var arr = [1, 9, 2, 3, 8, 6, 7, 1, 2, 6, 1, 3, 2, 3];

// var res = arr.filter((item) => {
//     return item;
// }).sort();
// console.log(res);
// fs.writeFileSync("hello.txt", res.toString());
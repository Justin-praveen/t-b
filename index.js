const express = require("express");
const cors = require("cors");
const app = express()
const rout = require("./routs")
const bodyparser =require("body-parser");


app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use("/",rout)

app.listen(4000,(err => console.log("port connected..!")))







 
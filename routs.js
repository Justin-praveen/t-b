const express = require("express");
const multer = require("multer")
const rout = express.Router()
const task = require("./model");

task.sync()

const store = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"./photos")
    },
    filename : (req,file,clb)=>{
        clb(null,file.originalname);
    }
})

rout.post("/register",upload.single("profile"), async (req, res) => {

const { names, email, password, designation, admin } = req.body
    const check = await task.findOne({where:{email : email}})
    if(check){
        res.json(
            "email already exist...!"
        )
    }
    else{

           
    const reg = await new task({
        names,
        email,
        password,
        designation,
        admin,
        profile : req.file.originalname
    })

    reg.save().then((da) => {
        if (da) {
            res.json({
                status: "true",
                register: "sucessfully...!"
            })
        }
    }).catch((err) => {
        res.json({
            status: "false"
        })
    })
    }

 

})

rout.post("/login", async (req, res) => {
    const email = req.body.email
    const password  = req.body.password

    const hu = await task.findOne({where :{email: email}})
    console.log(typeof(hu))
        if(hu.password == password){
            res.json({
                status : "true",
                data : hu
            })
        }
        else{
            res.json({
                status : "false",

            })
        } 
    })


rout.get("/users", async (req, res) => {

    const ad = await task.findAll();
    res.send(ad)

})

rout.post("/update", upload.single("profile"),async (req, res) => {
    const data = {
        names: req.body.names,
        email: req.body.email,
        password: req.body.password,
        designation: req.body.designation,
        admin : req.body.admin
        profile : req.file.originalname
    }
    const up = await task.update(data, { where: { id: req.body.id } })

    if (up) {
        res.json({
            status: "true"
        })
    } 
    else {
        res.json({
            status: "false"
        })
    }


})

rout.post("/del", async (req, res) => {
    const del = await task.destroy({ where: { id: req.body.id } })
    if (del) {
        res.json({
            status: "true",
        })
    }
    else {
        res.json("something wrong....!")
    }

})

module.exports = rout


 

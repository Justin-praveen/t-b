const {Sequelize,DataTypes}= require("sequelize");


const seq = new Sequelize("second","root","root",{
    host : "localhost",
    dialect : "mysql"
})
seq.authenticate().then((done => console.log("db connected....!")))
seq.sync()

module.exports = seq
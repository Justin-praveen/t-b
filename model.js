const {DataTypes} = require("sequelize");
const seq = require("./db")

  const task = seq.define("employee",{
    names : {
      type : DataTypes.STRING
    },
    email : {
      type : DataTypes.STRING
    },
    password : {
      type : DataTypes.STRING
    },
    designation : {
      type : DataTypes.STRING
    },
    admin : {
      type :DataTypes.STRING
    },
    profile : {
      type : DataTypes.STRING
    }
    )

module.exports = task
  

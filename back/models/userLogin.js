const mongoose = require("mongoose")

const userScheemaa = new mongoose.Schema({
    nama : String,
    email : String,
    password : String,
    role : {
        type : String,
        default : "visitor"
    }
}) 

const userLogin = mongoose.model("userLogin", userScheemaa)

module.exports = userLogin
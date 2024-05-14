const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const bcrpyt = require("bcrypt")
const mongoose = require("mongoose")

const dataLogin = require("../back/models/userLogin")
mongoose.connect("mongodb://localhost:27017/loginAuth")



const app = express()
app.use(cors({
    origin : ["http://localhost:5173"],
    methods : ["GET","POST"],
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())



// post data
app.post("/signup", (req, res) => {
    const { nama, email, password} = req.body
    bcrpyt.hash(password, 10)
        .then(hash => {
            dataLogin.create({ nama, email, password: hash })
                .then(userLogin => res.json(userLogin))
                .catch(err => res.json(err))
        }).catch(err => res.json(err))
})

// login data
app.post("/login" ,(req, res)=>{
    const {email, password} = req.body
    dataLogin.findOne({email:email})
    .then(userLogin=>{
        if(userLogin){
            bcrpyt.compare(password, userLogin.password, (err, response)=>{
                if(response){
                    const token = jwt.sign({email:userLogin.email, role:userLogin.role},"jwt-secret-key",{expiresIn:"1d"})
                    res.cookie("token",token)
                    return res.json("success")
                }
            })
        }else{
            return console.log("data diri belum terdaftar")
        }
    })
})

app.listen(3000, () => {
    console.log("Server is running")
})
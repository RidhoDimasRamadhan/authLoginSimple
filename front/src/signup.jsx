import React from "react"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function signup (){
const [nama, setNama] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate()

    const signup = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/signup", {nama,email,password})
        .then(res => {
            alert("sukses")
            navigate("/login")
        }).catch(err => console.log(err))
        }

    
    return(
        <>

            <div className="d-flex justify-content-center align-items-center">

            <form onSubmit={signup}>
            <h1>Halaman signup</h1>
        
                <div className="mb-2">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="masukkan username" className="form-control" onChange={(e) => setNama(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="masukkan email" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="masukkan Password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                <button className="btn btn-primary">SignUp</button>
            </form>
            </div>
        </>
    )
}
export default signup
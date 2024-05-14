import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function login() {

    const [email, setEmail] = useState()
    const [password, Setpassword] = useState()


axios.defaults.withCredentials = true
const login = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:3000/login", {email, password})
    .then(alert("berhasil masuk"))
    .catch(err => console.log(err))

}

    return (
        <>
            <h1>halaman login</h1>
            <div className="home">
                <form onSubmit={login}>

                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" className="form-control" placeholder="input username" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" placeholder="input password" onChange={(e) => Setpassword(e.target.value)}/>
                    </div>
                    <button className="btn btn-dark">Login</button>
                    <br />
                    <Link to={"/signup"}>Belum punya akun? klik ini</Link>
                </form>
            </div>
        </>
    )
}
export default login
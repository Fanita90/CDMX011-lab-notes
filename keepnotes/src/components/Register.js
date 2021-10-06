import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './styles/Register.css'
import logo from '../assets/logo.png'
import imgRegister from '../assets/img-register.png'

export const Register = ({ handleRegister }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    return (
        <div className="container">
            <div className="header">
                <header><Link to='/'><img src={logo} alt="logo" className="logo" /></Link></header>
            </div>

            <div className="title">
                <img src={imgRegister} alt="imgRegister" className="imgRegister" />
                <h1 className="h1-register">Registra tus datos</h1>
            </div>

            <div className="form-register">
                <h3>e-mail:</h3>
                <input className="input-register" type="text" onChange={(e) => { setEmail(e.target.value) }} />
                <h3>Password:</h3>
                <input className="input-register" type="password" onChange={(e) => { setPass(e.target.value) }} />
                <h3>Confirm Password:</h3>
                <input className="input-register" type="password" />
                <br />
                <button className="btn-register" onClick={() => { handleRegister(email, pass) }}>Iniciar Sesion</button>
            </div>
        </div>
    )
}
export default Register;
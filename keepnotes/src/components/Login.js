import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './styles/Login.css'
import logo from '../assets/logo.png'
import imgLogin from '../assets/img-login.png'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return (
        <div className="container">
            <div className="header">
                <header><Link to='/'><img src={logo} alt="logo" className="logo" /></Link></header>
            </div>

            <div className="title">
                <img src={imgLogin} alt="imgLogin" className="imgRegister" />
                <h1 className="h1-login">Inicia Sesión</h1>
            </div>

            <div className="form-login">
                <h3>e-mail:</h3>
                <input className="input-login" type="text" onChange={(e) => { setEmail(e.target.value) }} />
                <h3>Password:</h3>
                <input className="input-login" type="password" onChange={(e) => { setPass(e.target.value) }} />
                <h3>Confirm Password:</h3>
                <input className="input-login" type="password" />
                <br />
                <button className="btn-login" onClick={() => { handleLogin(email, pass) }}>Iniciar Sesión</button>
            </div>
        </div>
    );
}

export default Login;

import React, { useState } from 'react'
import googleImg from '../assets/google.png';

export const FormLogin = (props) => {
    const {handleLogin, handleGoogle}= props;
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleEmail =(e) => setEmail(e.target.value);
    const handlePassword= (e)=> setPass(e.target.value);

    return (
        <div className="form-login">
            <h3>e-mail:</h3>
            <input className="input-login" type="text" placeholder="ejemplo@correo.com" onChange={handleEmail} required />
            <h3>Password:</h3>
            <input className="input-login" type="password" placeholder="******" onChange={handlePassword} required />
            <br />
            <button className="btn-login" onClick={() => { handleLogin(email, pass) }}>Iniciar Sesión</button>
            <button className="btn-google" onClick={handleGoogle}>Google<img src={googleImg} alt="googleImg" className="googleImg" /></button>
            
        </div>
    )
}

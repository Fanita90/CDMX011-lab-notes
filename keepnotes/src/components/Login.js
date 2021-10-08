import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import './styles/Login.css';
import logo from '../assets/logo.png';
import register from '../assets/icon-register.png';
import imgLogin from '../assets/img-login.png';
import googleImg from '../assets/google.png';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { login, loginGoogle } = useAuth();
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('')
    const history = useHistory();

    const handleLogin = async () => {
        if (pass === confirmPass) {
            try {
                await login(email, pass)
                console.log('ya entre');
                history.push("/notes");
            } catch (error) {
                setError('Error en tu inicio de sesión, intenta de nuevo');
                setTimeout(() => setError(''), 2000);
                //console.log('no sirve');
            }

        }
        else {
            setError('Las contraseñas no coinciden');
            setTimeout(() => setError(''), 1500);
        }

    }

    const handleGoogle = async () => {
        try {
            await loginGoogle();
            history.push('/notes')
            console.log('google')
        } catch (error) {
            console.log('hay un error en google')
            setError('Wrong credentials,try again.')
            console.log(error);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <header><Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
                    <Link to='/register'><img src={register} alt="register" className="icon" /></Link></header>
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
                <input className="input-login" type="password" onChange={(e) => { setConfirmPass(e.target.value) }} />
                {error && <p className='error'>{error}</p>}

                <br />
                <button className="btn-login" onClick={() => { handleLogin(email, pass, confirmPass) }}>Iniciar Sesión</button>
                <button className="btn-google" onClick={handleGoogle}>Google<img src={googleImg} alt="googleImg" className="googleImg" /></button>
            </div>
        </div>
    );

}
export default Login;

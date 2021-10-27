import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import './styles/Register.css'
import logo from '../assets/logo.png'
import imgRegister from '../assets/img-register.png'
import iconuser from '../assets/icon-user.png'
import { useAuth } from '../context/AuthContext';
import { FormRegister } from './FormRegister';

const Register = () => {
    const { register, loginGoogle } = useAuth();
    const [error, setError] = useState(null);

    let history = useHistory();

    const handleRegister = async (email, pass, confirmPass) => {
        if (pass !== confirmPass) {
            setError('Las contraseñas no coinciden');
            setTimeout(() => setError(''), 1500);
        } else {
            try {
                await register(email, pass)
                console.log('ya me registre');
                history.push("/notes");
            } catch (error) {
                setError('Correo incorrecto');
                setTimeout(() => setError(''), 1500);
            }
        }
    }
    const handleGoogleRegister = async () => {
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
                    <Link to='/login'><img src={iconuser} alt="login" className="icon" /></Link>
                </header>
            </div>

            <div className="title">
                <img src={imgRegister} alt="imgRegister" className="imgRegister" />
                <h1 className="h1-register">Registra tus datos</h1>
            </div>
            <FormRegister handleRegister={handleRegister} handleGoogleRegister={handleGoogleRegister} />
            <div>{error && <p className='error'>{error}</p>}</div>
        </div>
    )
}
export default Register;
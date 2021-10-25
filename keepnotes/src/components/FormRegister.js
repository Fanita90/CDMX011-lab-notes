import React,{useState} from 'react'
import googleImg from '../assets/google.png'

export const FormRegister = (props) => {
    const { handleRegister, handleGoogleRegister } = props;
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPass(e.target.value);
    const handleConfirmPassword = (e) => setConfirmPass(e.target.value)

    return (
        <div className="form-register">
            <h3>e-mail:</h3>
            <input className="input-register" type="text" placeholder="ejemplo@correo.com" onChange={handleEmail} required />
            <h3>Password:</h3>
            <input className="input-register" type="password" placeholder="contraseña" onChange={handlePassword} required />
            <h3>Confirm Password:</h3>
            <input className="input-register" type="password" placeholder="repita contraseña" onChange={handleConfirmPassword} required />

            <button className="btn-register" onClick={() => { handleRegister(email, pass, confirmPass) }}>Registrar Datos</button>
            <button className="btn-google" onClick={handleGoogleRegister}>Google<img src={googleImg} alt="googleImg" className="googleImg" /></button>
        </div>
    )
}

import React from 'react';
import { Link, useHistory } from "react-router-dom";
import './styles/Notes.css'
import logo from '../assets/logo.png'
import exit from '../assets/icon-exit.png'
import userNotes from '../assets/user-notes.png'
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebaseconfig';



function Notes(props) {
    const { logout, currentUser } = useAuth();
    let history = useHistory();

    const handleLogout = async () => {

        try {
            await logout()
            console.log('arios');
            history.push("/");

        } catch (error) {
            //setError('Lo que sea');
            //setTimeout(() => setError(''), 1500);
            console.log('chale, otra vez no sirve');
        }
    }
    return (
        <div className="conteiner">
            <div className="header">
                <header><Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
                    <img src={exit} alt="exit" className="icon" onClick={() => { handleLogout(auth) }} /></header>
            </div>
            <p className="p-welcome"><img src={userNotes} alt="userNotes" className="welcomePhoto" />Bienvenido {currentUser.email}</p>
            <h1 className="h1-notes">Mis notas</h1>
            <button className="btn-note">Crear nota</button>
        </div>
    );
}

export default Notes;
import React from 'react';
import { Link } from "react-router-dom";
import './styles/Notes.css'
import logo from '../assets/logo.png'

function Notes(props) {
    return (
        <div className="conteiner">
            <div className="header">
                <header><Link to='/'><img src={logo} alt="logo" className="logo" /></Link></header>
            </div>
            <h1 className="h1-notes">Mis notas</h1>
            <button className="btn-note">Crear nota</button>
        </div>
    );
}

export default Notes;
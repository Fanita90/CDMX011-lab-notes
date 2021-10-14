import React from 'react';
import {Link } from "react-router-dom";
import './styles/Home.css'
import logo from '../assets/logo.png'
import imgHome from '../assets/img-home.png'
const Home = () => {
    return (

        <div className="container">
            <div className="header">
                <header><Link to ='/'><img src={logo} alt="logo" className="logo" /></Link></header>
            </div>
            <div className="welcome">
                <p className="p-home">Tomar notas nunca fue más sencillo...</p>
                <img src={imgHome} alt="imgHome" className="imgHome" />
            </div>
            <div className="container-btn">
                <Link to ='/register'><button className="btn-home">Regístrate</button></Link>
                <Link to ='/login'><button className="btn-home">Iniciar Sesión</button></Link>
            </div>
            <div className="footer">
              <footer className="footer-p">Hecho por Estefany Laboratoria 011 Mex.</footer>  
            </div>
        </div>
    );
}

export default Home;
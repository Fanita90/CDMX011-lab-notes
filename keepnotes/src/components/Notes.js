import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import './styles/Notes.css'
import logo from '../assets/logo.png'
import exit from '../assets/icon-exit.png'
import userNotes from '../assets/user-notes.png'
import { useAuth } from '../context/AuthContext';
import { auth, db } from '../firebaseconfig';
import { CreateNotes } from './CreateNotes';
import { collection, query, onSnapshot, orderBy, where } from '@firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";
import { Modal } from './Modal';
import Swal from 'sweetalert2';


function Notes() {
    const { logout, currentUser } = useAuth();
    let history = useHistory();
    const handleLogout = () => {
        try {
            Swal.fire({
                title: '¿Quieres cerrar sesión?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'No salir',
                confirmButtonText: 'Cerrar sesión'
            }).then((result) => {
                if (result.isConfirmed) {
                    logout()
                    history.push("/");
                    Swal.fire(
                        '¡Adios!',
                        'Tu sesión ha sido cerrada.',
                        'success'
                    )
                }
            })
        } catch (error) {
            console.log('chale, otra vez no sirve');
        }
    }

    const [post, setPost] = useState([]);
    useEffect(() => {
        const renderNote = onAuthStateChanged(auth, (user) => {
            if (user) {
                const q = query(collection(db, 'post'), orderBy("date", "desc"), where("email", "==", user.email));
                onSnapshot(q, (querySnapshot) => {
                    const documents = [];
                    querySnapshot.forEach((doc) => {
                        documents.push({ id: doc.id, ...doc.data() })
                    });
                    setPost(documents);
                });


            } else {
                console.log('no estoy logueado');
            }
        });
        return renderNote;

    }, []);

    const [isVisible, setIsVisible] = useState(false);
    const showModal = () => setIsVisible(true);
    const hideModal = () => setIsVisible(false);

    const newNote = { title: '', description: '' }

    return (
        <div className="conteiner">
            <div className="header">
                <header><Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
                    <img src={exit} alt="exit" className="icon" onClick={() => { handleLogout(auth) }} /></header>
            </div>
            <div>
                <p className="p-welcome"><img src={userNotes} alt="userNotes" className="welcomePhoto" />Bienvenido {currentUser.email}</p>
                <h1 className="h1-notes">Mis notas</h1>
                <button className="btn-note" onClick={showModal}>Crear nota</button>
            </div>
            <div className='show-btn'>
                {

                    post.map((note) => (
                        <CreateNotes key={note.id} note={note} />
                    ))
                }
            </div>

            {
                isVisible &&
                <Modal mode='create' isVisible={isVisible} note={newNote} hideModal={hideModal} />
            }
        </div>
    );





}

export default Notes;
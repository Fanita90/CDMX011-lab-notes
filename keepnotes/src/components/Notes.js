import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import './styles/Notes.css'
import logo from '../assets/logo.png'
import exit from '../assets/icon-exit.png'
import userNotes from '../assets/user-notes.png'
import { useAuth } from '../context/AuthContext';
import { auth, db } from '../firebaseconfig';
import { CreateNotes } from './CreateNotes';
import { collection, query, onSnapshot } from '@firebase/firestore';
import { Modal } from './Modal';


function Notes() {
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

    const [post, setPost] = useState([]);
    useEffect(() => {
        const q = query(collection(db, 'post'));
        onSnapshot(q, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ id: doc.id, ...doc.data() })
            });
            setPost(documents);
        })
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
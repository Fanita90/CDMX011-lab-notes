import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { db } from '../firebaseconfig';
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import './styles/Modal.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#59e7d9f1',
        border: '5px solid #4AE1D2',
        boxShadow: '5px 5px 10px black'

    },
};
export const Modal = ({ note, mode, isVisible, hideModal }) => {
    const { id, title, description } = note;
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [isOpen, setIsOpen] = useState(isVisible);

    const closeModal = () => {
        setIsOpen(false);
        hideModal();
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (mode === 'edit') {
            editNotes();
        } else {
            createNotes();
        }
        closeModal();
    }
    const handleTitleChange = (e) => setNewTitle(e.target.value);
    const handleDescriptionChange = (e) => setNewDescription(e.target.value);

    const createNotes = async () => {
        try {
            await addDoc(collection(db, "post"), {
                title: newTitle,
                description: newDescription
            })

        } catch (error) {
            console.error(error);
        }
    }
    const editNotes = async () => {
        try {
            await setDoc(doc(db, "post", id), {
                title: newTitle,
                description: newDescription
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ReactModal isOpen={isOpen} style={customStyles} appElement={document.getElementById('root')}>
            <form className='modal' onSubmit={handleSubmit}>
                <button className="close-btn" onClick={closeModal}> X </button>
                
                <input type='text' className='input-modal' value={newTitle} placeholder='Título de tu nota' onChange={handleTitleChange} />
                
                <textarea type='text' className='text-modal' value={newDescription} placeholder='Escribe tu nota' onChange={handleDescriptionChange} />
                {
                    mode === 'edit' ?
                        <button type='submit' className='edit-btn-modal'>Editar Nota</button> :
                        <button type='submit' className='create-btn'>Crear</button>
                }
            </form>
        </ReactModal>
    )

}
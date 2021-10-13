import React, { useState } from 'react'
import { db } from '../firebaseconfig';
import { doc, deleteDoc } from "firebase/firestore";
import { Modal } from './Modal';
import './styles/CreateNotes.css';
import iconDelete from '../assets/icon-delete.png';
import iconEdit from '../assets/icon-edit.png'

export const CreateNotes = ({ note }) => {
    const { id, title, description } = note;
    const deleteNote = async () => {
        try {

            await deleteDoc(doc(db, 'post', id));
        } catch (error) {
            console.error(error);
        }
    }

    const [isVisible, setIsVisible] = useState(false);
    const showModal = () => setIsVisible(true);
    const hideModal = () => setIsVisible(false);

    return (
        <div className='todo'>
            <div className='note-print'>
                <div className='note-body'>
                    <p className='parraf-title'>Título: {title}</p>
                    <p className={'parraf-description'} >Nota: {description}</p>
                </div>
                <div className='note-btns'>
                    {/*<button className='edit-btn btn-notes' onClick={showModal}>Editar</button>
                <button className='delete-btn btn-notes' onClick={deleteNote}>Borrar</button>*/}
                    <img src={iconEdit} alt="edit" className=" edit-btn" onClick={showModal} />
                    <img src={iconDelete} alt="delete" className=" delete-btn" onClick={deleteNote} />
                </div>
                {
                    isVisible &&
                    <Modal note={note} mode='edit' isVisible={isVisible} hideModal={hideModal} />
                }
            </div>
        </div>
    )
}

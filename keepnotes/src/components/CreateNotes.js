import React, { useState } from 'react'
import { db } from '../firebaseconfig';
import { doc, deleteDoc } from "firebase/firestore";
import { Modal } from './Modal';
import './styles/CreateNotes.css';
import iconDelete from '../assets/icon-delete.png';
import iconEdit from '../assets/icon-edit.png';
import Swal from 'sweetalert2';

export const CreateNotes = ({ note }) => {

    const { id, title, description, date } = note;
    const deleteNote = () => {
        try {
            Swal.fire({
                title: 'Borrar nota',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar borrar nota',
                confirmButtonText: '¡Sí, bórralo!'
            })

                .then((result) => {
                    if (result.isConfirmed) {
                        deleteDoc(doc(db, 'post', id));
                        Swal.fire(
                            'Borrado!',
                            'Tu nota ha sido borrada.',
                            'success'
                        )

                    }


                })


        } catch (error) {
            console.error(error);
        }
    }

    const [isVisible, setIsVisible] = useState(false);
    const showModal = () => setIsVisible(true);
    const hideModal = () => setIsVisible(false);

    return (
        <div className='all-container'>
            <div className='note-print'>
                <div className='note-body'>
                    <p className='parraf-title'>Título: {title}</p>
                    <p className={'parraf-description'} >Nota: {description}</p>
                </div>
                <div className='note-btns'>
                    <p className={'date'} >{date}</p>
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

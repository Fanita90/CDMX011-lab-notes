import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDw196sajo5-zJ77K1a21yD9ud4JJoAM2A",
    authDomain: "keep-notes-78aea.firebaseapp.com",
    projectId: "keep-notes-78aea",
    storageBucket: "keep-notes-78aea.appspot.com",
    messagingSenderId: "563697277897",
    appId: "1:563697277897:web:a0fb59315a72a5df19a618"
};
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();




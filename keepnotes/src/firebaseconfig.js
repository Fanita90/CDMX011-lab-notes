import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyDw196sajo5-zJ77K1a21yD9ud4JJoAM2A",
    authDomain: "keep-notes-78aea.firebaseapp.com",
    projectId: "keep-notes-78aea",
    storageBucket: "keep-notes-78aea.appspot.com",
    messagingSenderId: "563697277897",
    appId: "1:563697277897:web:a0fb59315a72a5df19a618"
};
initializeApp(firebaseConfig);

export const createAccount = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('todo bien al 100!');
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('no sirve');
            console.log(errorCode);
            console.log(errorMessage);
            // ..
        });

}
export const loginAccount = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            console.log('ya estoy dentro')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            console.log('no puedo entrar!!')
        });
}



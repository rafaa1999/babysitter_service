// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore} from "firebase/firestore"; 
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyA-Gqeh5bFDFh7hgxCgIo9YqIIRkurCMdU",
    authDomain: "products-c2078.firebaseapp.com",
    projectId: "products-c2078",
    storageBucket: "products-c2078.appspot.com",
    messagingSenderId: "746463039205",
    appId: "1:746463039205:web:15b103f27e8fd25e164e0c"
    };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db=getFirestore(app);
export const storage = getStorage(app);
export default app;

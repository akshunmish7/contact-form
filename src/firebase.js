import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAfUpEJSImUCNN4aj4YzHC7eRNtYdpUXmI",
    authDomain: "contact-form-ee3e7.firebaseapp.com",
    projectId: "contact-form-ee3e7",
    storageBucket: "contact-form-ee3e7.appspot.com",
    messagingSenderId: "279587516172",
    appId: "1:279587516172:web:c5bb760ce01ac2d0af6329",
    databaseURL: "https://contact-form-ee3e7-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


export default database;
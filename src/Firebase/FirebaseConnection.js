import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCNsl1qKRiMV8PR2I-mNvpNB0IRX736IDc",
    authDomain: "aiswarya-react-app.firebaseapp.com",
    projectId: "aiswarya-react-app",
    storageBucket: "aiswarya-react-app.appspot.com",
    messagingSenderId: "502992786665",
    appId: "1:502992786665:web:372d0613789f6140d5cc78",
    measurementId: "G-MMSDFF8V5J"
};


const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


export { fire, auth }
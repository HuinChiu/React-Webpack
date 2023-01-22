import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCaoAwO5XqVsOphRCpW-bn8GrzpzD3YWAQ",
    authDomain: "react-webpack-d05b9.firebaseapp.com",
    projectId: "react-webpack-d05b9",
    storageBucket: "react-webpack-d05b9.appspot.com",
    messagingSenderId: "497037376983",
    appId: "1:497037376983:web:d9176bcffcc2ce205fdf92",
    measurementId: "G-EZDJJW8MPT"
  };
 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);

// const todoListCollection=collection(db, TodoList);

// const AddTodo=async ({content})=>{
//     const docRef= await addDoc(todoListCollection,{
//         consent,
//         created:severTimestamp(),
//     });
//     return docRef
// }
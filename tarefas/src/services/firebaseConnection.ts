
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCMRF-nFv_Low-Rqbij55YaS7aOT-DjTOY",
  authDomain: "tarefas-43371.firebaseapp.com",
  projectId: "tarefas-43371",
  storageBucket: "tarefas-43371.appspot.com",
  messagingSenderId: "1062596607270",
  appId: "1:1062596607270:web:59c73d5abe25bedb2755e7",
  measurementId: "G-HTQHMFB6BQ"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db }
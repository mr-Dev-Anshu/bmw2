import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" ; 
import {getDatabase} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyCx4JJXlV-Sv9yE-oWN1e-BmzcUTmMGohQ",
  authDomain: "mock-interview-f6ffc.firebaseapp.com",
  projectId: "mock-interview-f6ffc",
  storageBucket: "mock-interview-f6ffc.appspot.com",
  messagingSenderId: "956521351511",
  appId: "1:956521351511:web:d5b20feb7b28db0f9c9612",
  measurementId: "G-91B0BTGQG4"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth (app) ; 
export const  realTimeDb = getDatabase(app)  ; 
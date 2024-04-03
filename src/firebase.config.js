import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" ; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmFQEalCVnpv6YZYu6q2TMc_P_Pnhz1Qw",
  authDomain: "online-mall-73ec2.firebaseapp.com",
  projectId: "online-mall-73ec2",
  storageBucket: "online-mall-73ec2.appspot.com",
  messagingSenderId: "947942315662",
  appId: "1:947942315662:web:bf735a471ca2761dc99bdf",
  measurementId: "G-BK7SFRT097"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth (app) ; 
export const db =  getFirestore(app) ; 


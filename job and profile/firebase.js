// firebase.js

import { initializeApp } from '@react-native-firebase/app';

// Your Firebase config object


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1U9QdGLCzkgL_2OYKUMPiLvyAElB588M",
    authDomain: "jobui-d4897.firebaseapp.com",
    databaseURL: "https://jobui-d4897-default-rtdb.firebaseio.com",
    projectId: "jobui-d4897",
    storageBucket: "jobui-d4897.appspot.com",
    messagingSenderId: "370851569090",
    appId: "1:370851569090:web:0c65f3a821ba0ca3df4a5b",
    measurementId: "G-DMVM69YVQ8"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

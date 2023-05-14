import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCi4ms0W9vAh4ZNCErNogAtT_NnQ2lrc7A",
    authDomain: "glassrecyclingms.firebaseapp.com",
    databaseURL: "https://glassrecyclingms-default-rtdb.firebaseio.com",
    projectId: "glassrecyclingms",
    storageBucket: "glassrecyclingms.appspot.com",
    messagingSenderId: "746846075119",
    appId: "1:746846075119:web:e0ba83ffb70dcbb088c31a"
};

export const app = initializeApp(firebaseConfig);


importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyAWGyalZFlC-UkyeQO0PFBewoImahkEKHo",
    authDomain: "databaseproject1-e14d9.firebaseapp.com",
    databaseURL: "https://databaseproject1-e14d9.firebaseio.com",
    projectId: "databaseproject1-e14d9",
    storageBucket: "databaseproject1-e14d9.appspot.com",
    messagingSenderId: "100675696516",
    appId: "1:100675696516:web:8878e3a08fa6f783bf4fd1",
    measurementId: "G-MEVRXF3HPY"
  };

firebase.initializeApp(firebaseConfig);
firebase.messaging(); // add service
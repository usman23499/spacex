import firebase from 'firebase';


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

var message=firebase.messaging(); // add service

export function requestPermission() {
    // [START messaging_request_permission]
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        // copy form https://firebase.google.com/docs/cloud-messaging/js/client?authuser=0
        // remove { vapidKey: '<YOUR_PUBLIC_VAPID_KEY_HERE>' }

        message.getToken().then((currentToken) => {
            if (currentToken) {
             console.log("TOKEN==>",currentToken);
            } else {
              // Show permission request UI
              console.log('No registration token available. Request permission to generate one.');
              // ...
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
          });

      } else {
        console.log('Unable to get permission to notify.');
      }
    });
    // [END messaging_request_permission]
  }
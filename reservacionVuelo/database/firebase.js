import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBjnwB_mAtWS87JkwvEHoZfhlYBz9wP0Zk",
    authDomain: "reservacion-vuelos.firebaseapp.com",
    databaseURL: "https://reservacion-vuelos.firebaseio.com",
    projectId: "reservacion-vuelos",
    storageBucket: "reservacion-vuelos.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID",
  };

firebase.initializeApp(firebaseConfig);

export default firebase
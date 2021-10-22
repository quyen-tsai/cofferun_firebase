(function (window) {

  'use strict';
  var App = window.App || {};
  var FirebaseConfig = {
    apiKey: "AIzaSyDs8ipvx_AhczQKeAmTrgJYxEw9mbftNVE",
    authDomain: "coffeerun-dbf85.firebaseapp.com",
    databaseURL: "https://coffeerun-dbf85-default-rtdb.firebaseio.com",
    projectId: "coffeerun-dbf85",
    storageBucket: "coffeerun-dbf85.appspot.com",
    messagingSenderId: "679413609990",
    appId: "1:679413609990:web:accbd6c298959897df3587",
    measurementId: "G-27PZJ9SD1P"
  };

  // Initialize Firebase
  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);
  window.App = App;
})(window);
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAGn-CUuLNpgCuy4dDawBZi3p6l81fV_Qw",
    authDomain: "test-b6248.firebaseapp.com",
    projectId: "test-b6248",
    storageBucket: "test-b6248.appspot.com",
    messagingSenderId: "214308841574",
    appId: "1:214308841574:web:ede2d5bc156212068fe5a7"
};

firebase.initializeApp(firebaseConfig);
//Source:::Firebase : Google Authentication(Youtube)
//Get the Elements

const GoogleSignIn = document.getElementById("GoogleSignIn");
//*********************** */
GoogleSignIn.addEventListener('click', e => {
    provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithRedirect(provider).then(function (result)
    //Error3:After Sign But For Pop-Up Is Working


    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(user, token, result);
        console.log("Success ..Google Account Linked");
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(error);
        // ...
    });


});
var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyAGn-CUuLNpgCuy4dDawBZi3p6l81fV_Qw",
  authDomain: "test-b6248.firebaseapp.com",
  projectId: "test-b6248",
  storageBucket: "test-b6248.appspot.com",
  messagingSenderId: "214308841574",
  appId: "1:214308841574:web:ede2d5bc156212068fe5a7"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}



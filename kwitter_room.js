
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC3SpbgxlA4jL2EfYMMt_aZJCcaeG1JlEQ",
      authDomain: "kwitter-not-quitter-9b5c8.firebaseapp.com",
      projectId: "kwitter-not-quitter-9b5c8",
      storageBucket: "kwitter-not-quitter-9b5c8.appspot.com",
      messagingSenderId: "900878094207",
      appId: "1:900878094207:web:3447f07d04156dce25144a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDl5ExqDqkx0MFkGvcbErw4OifkknyG20E",
      authDomain: "kwitterapp-fee52.firebaseapp.com",
      projectId: "kwitterapp-fee52",
      storageBucket: "kwitterapp-fee52.appspot.com",
      messagingSenderId: "422714459721",
      appId: "1:422714459721:web:1916a33433937877d7e198"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

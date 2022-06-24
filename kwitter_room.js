var firebaseConfig = {
  apiKey: "AIzaSyA_9j_91Sn--cMDTYKn4JmKnuydgOs8FCM",
  authDomain: "adv-c94-d248c.firebaseapp.com",
  databaseURL: "https://adv-c94-d248c-default-rtdb.firebaseio.com",
  projectId: "adv-c94-d248c",
  storageBucket: "adv-c94-d248c.appspot.com",
  messagingSenderId: "58619920615",
  appId: "1:58619920615:web:ab0d3a5e43e07eecc52242"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

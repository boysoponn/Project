import  firebase from 'firebase';

    var configfirebase = {
    apiKey: "AIzaSyBF-_rw-Wr0tibU0MQtTBvrt2uvrE-3u80",
    authDomain: "cms-project-35e34.firebaseapp.com",
    databaseURL: "https://cms-project-35e34.firebaseio.com",
    projectId: "cms-project-35e34",
    storageBucket: "cms-project-35e34.appspot.com",
    messagingSenderId: "916523546529"
  };
  const config =firebase.initializeApp(configfirebase);
  export default config;

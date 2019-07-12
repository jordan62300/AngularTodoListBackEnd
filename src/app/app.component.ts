import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';

  constructor() {
     // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBDTjUysF7uc-CY4ISQ4kbe4LI-vXHdDJw",
    authDomain: "todolist-195e5.firebaseapp.com",
    databaseURL: "https://todolist-195e5.firebaseio.com",
    projectId: "todolist-195e5",
    storageBucket: "",
    messagingSenderId: "1090770942175",
    appId: "1:1090770942175:web:7331e8cfa6587909"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}

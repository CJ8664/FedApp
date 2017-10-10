import firebase from 'firebase'
import firestore from 'firebase/firestore'
var config = {
		apiKey: "AIzaSyCmrV94B42rB-vDB_F0EJ_68dDPa2vN-qI",
		authDomain: "fedapp-ncsu.firebaseapp.com",
		databaseURL: "https://fedapp-ncsu.firebaseio.com",
		projectId: "fedapp-ncsu",
		storageBucket: "fedapp-ncsu.appspot.com",
		messagingSenderId: "793785966281"
};
var fire = firebase.initializeApp(config);
export default fire;

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAQLWNmO3DQ9MjPTCCyF2oQFQpBvEl9nX0",
	authDomain: "tinder-clone-krish7x.firebaseapp.com",
	databaseURL: "https://tinder-clone-krish7x.firebaseio.com",
	projectId: "tinder-clone-krish7x",
	storageBucket: "tinder-clone-krish7x.appspot.com",
	messagingSenderId: "401584545135",
	appId: "1:401584545135:web:60b9a96347b98735311c9a",
	measurementId: "G-NTYCKHNXBR",
});

const db = firebaseApp.firestore();

export { db };

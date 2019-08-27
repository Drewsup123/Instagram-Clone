import Config from './config';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: Config.apiKey,
    authDomain: Config.authDomain,
    databaseURL: Config.databaseURL,
    projectId: Config.projectId,
    storageBucket: Config.storageBucket,
    messagingSenderId: Config.messagingSenderId,
    appId: Config.appId
};

export default function InitializeFirebase(){
    console.log("Firebase Config", firebaseConfig)
    firebase.initializeApp(firebaseConfig)
};




// Firebase product	                                Namespace	Web
// Authentication	                                firebase.auth()		
// Cloud Firestore	                                firebase.firestore()		
// Cloud Functions for Firebase Client SDK	        firebase.functions()		
// Cloud Messaging	                                firebase.messaging()		
// Cloud Storage	                                firebase.storage()		
// Performance Monitoring(beta release)	            firebase.performance()		
// Realtime Database	                            firebase.database()		




// Firebase product	                                Library reference
// Firebase core (required)	                        import "firebase/app";
// Authentication	                                import "firebase/auth";
// Cloud Firestore	                                import "firebase/firestore";
// Cloud Functions for Firebase Client SDK	        import "firebase/functions";
// Cloud Messaging	                                import "firebase/messaging";
// Cloud Storage	                                import "firebase/storage";
// Performance Monitoring(beta release)	            import "firebase/performance";
// Realtime Database	                            import "firebase/database";
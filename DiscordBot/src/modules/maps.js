/**
 * Sends Map Information to Firebase:
 */

import {getFirestore} from "firebase-admin/firestore";

export function storeFirebase(maps) {

    const firebaseConfig = {
        apiKey: "AIzaSyAka60D6au7Y38SeWIBahUPG5tNcYAXSA8",
        authDomain: "bonkleaderboard.firebaseapp.com",
        projectId: "bonkleaderboard",
        storageBucket: "bonkleaderboard.appspot.com",
        messagingSenderId: "621980729647",
        appId: "1:621980729647:web:fa4b5a179f9cdb677161da",
        measurementId: "G-TJC3N4E459"
    };

    const initializeApp = require('firebase-admin/app');
    const db = getFirestore(initializeApp);

}
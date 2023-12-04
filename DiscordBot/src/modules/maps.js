import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {getFirestore, collection, doc, getDocs} from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';
const fs = require('fs');

// downloads all firestore map information in CSV format
// Index,Map_Name,Map_Maker,Mode,Version,Multiplayer,Proof_Of_Concept,Parkour_Type
export async function downloadMaps() {
    // Firebase Initialization
    const firebaseConfig = {
        apiKey: "AIzaSyAka60D6au7Y38SeWIBahUPG5tNcYAXSA8",
        authDomain: "bonkleaderboard.firebaseapp.com",
        projectId: "bonkleaderboard",
        storageBucket: "bonkleaderboard.appspot.com",
        messagingSenderId: "621980729647",
        appId: "1:621980729647:web:fa4b5a179f9cdb677161da",
        measurementId: "G-TJC3N4E459"
    };
    const app = initializeApp(firebaseConfig);
    const database = getFirestore(app);

    // create indexed mapName
    let csvData = [];
    const indexedNames = await getDocs(collection(database, "mapNames"));
    indexedNames.forEach((doc) => {
            let index = Number(doc.id);
            let name = doc.data().mapName;
            csvData[index][0] = name;
        }
    );
}
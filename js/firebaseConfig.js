import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {

apiKey: "YOUR_API_KEY",
authDomain: "portfolio-ai.firebaseapp.com",
projectId: "portfolio-ai",
storageBucket: "portfolio-ai.appspot.com",
messagingSenderId: "XXXX",
appId: "XXXX"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

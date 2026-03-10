import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"

const firebaseConfig={
apiKey:"AIzaSyAuJk0uxRGrnFZPocxBAKnIynQAW5pFtr8",
authDomain:"stock-portfolio-app-244ff.firebaseapp.com",
projectId:"stock-portfolio-app-244ff",
appId:"1:142779739862:web:593b35d996c7f3fe692377"
}

const app=initializeApp(firebaseConfig)

export const auth=getAuth(app)
export const db=getFirestore(app)
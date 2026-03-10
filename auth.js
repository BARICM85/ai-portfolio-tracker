import { auth } from "../firebaseConfig.js"

import {
GoogleAuthProvider,
signInWithPopup,
signOut
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"

const provider=new GoogleAuthProvider()

window.login=async function(){
let res=await signInWithPopup(auth,provider)
document.getElementById("user").innerText=res.user.email
}

window.logout=function(){
signOut(auth)
document.getElementById("user").innerText=""
}
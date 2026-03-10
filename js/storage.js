import { db,auth } from "../firebaseConfig.js"

import {
doc,
getDoc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"

let currentPortfolio="A"

export function switchPortfolio(p){
currentPortfolio=p
location.reload()
}

export async function loadPortfolio(){

let user=auth.currentUser
if(!user) return []

let ref=doc(db,"portfolios",user.uid+"_"+currentPortfolio)
let snap=await getDoc(ref)

return snap.exists()?snap.data().stocks:[]
}

export async function savePortfolio(data){

let user=auth.currentUser
if(!user) return

let ref=doc(db,"portfolios",user.uid+"_"+currentPortfolio)
await setDoc(ref,{stocks:data})

}

export async function clearPortfolio(){
await savePortfolio([])
location.reload()
}

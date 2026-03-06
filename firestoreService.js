import { db } from "./firebaseConfig.js";
import {
collection,
doc,
setDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function savePortfolio(userId, portfolio){

await setDoc(
doc(db,"portfolios",userId),
{ portfolio }
);

}

export async function loadPortfolio(userId){

const snapshot = await getDocs(collection(db,"portfolios"));

let data=[];

snapshot.forEach(doc=>{
data=doc.data().portfolio;
});

return data;

}

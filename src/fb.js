import { initializeApp } from "firebase/app"
import { getFirestore, doc, getDoc } from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAkOrNZEfxZsoOZyoYyjwm65QHEfL_0S8s",
  authDomain: "lxgf-clicker.firebaseapp.com",
  projectId: "lxgf-clicker",
  storageBucket: "lxgf-clicker.appspot.com",
  messagingSenderId: "98571518985",
  appId: "1:98571518985:web:d7621dd59bf0814127a4d8"
});

const db = getFirestore();

export const getInfoStrings = async () => {
  const docRef = doc(db, "main", "information");
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data().info_strings;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  
}
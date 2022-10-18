// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEYkpYBC8s_dQaD9bPWbWnx2Ft7uiDKik",
  authDomain: "bankvalvet-97cac.firebaseapp.com",
  projectId: "bankvalvet-97cac",
  storageBucket: "bankvalvet-97cac.appspot.com",
  messagingSenderId: "603690893682",
  appId: "1:603690893682:web:aea731349ffcc22624ddeb",
  databaseURL: "https://bankvalvet-97cac-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set } from "firebase/database";

export function storeTransactions(transactions: number[]) {
  const db = getDatabase(app);
  const reference = ref(db, "bank/transactions");
  set(reference, transactions);
}

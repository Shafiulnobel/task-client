import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOa38Awae1YKRM5L2W8BU4nlShfX_pnuA",
  authDomain: "task-wb.firebaseapp.com",
  projectId: "task-wb",
  storageBucket: "task-wb.appspot.com",
  messagingSenderId: "716665506582",
  appId: "1:716665506582:web:0b1a3ec35cb3191c891e37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
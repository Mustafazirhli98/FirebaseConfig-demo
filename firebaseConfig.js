import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCiVR43oGKrVfPplsmHuCjZJQm3CS0h2XM",
    // authDomain: "PROJECT_ID.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    // databaseURL: "https://DATABASE_NAME.firebaseio.com",
    projectId: "fir-configdemo-a3fdf",
    // storageBucket: "PROJECT_ID.appspot.com",
    // messagingSenderId: "SENDER_ID",
    // appId: "APP_ID",
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    // measurementId: "G-MEASUREMENT_ID",
}

const app = initializeApp(firebaseConfig)
const authenticate = getAuth(app)

export { authenticate }
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDSP4Qjb3ySgLVl9FoszhQ1GKoqT-bOmbQ',
  authDomain: 'insta-next-365e3.firebaseapp.com',
  projectId: 'insta-next-365e3',
  storageBucket: 'insta-next-365e3.appspot.com',
  messagingSenderId: '14596921237',
  appId: '1:14596921237:web:45073477da3f102383c89c',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }

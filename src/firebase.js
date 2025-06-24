// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDH7GLv3ES7_g7ErrdrGKJ3dn2WU6fzT2g',
    authDomain: 'portfolio-workout-tracker.firebaseapp.com',
    projectId: 'portfolio-workout-tracker',
    storageBucket: 'portfolio-workout-tracker.firebasestorage.app',
    messagingSenderId: '263589849483',
    appId: '1:263589849483:web:07d47bafebc5187ac8a78e',
    measurementId: 'G-Z21MWHJP60',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

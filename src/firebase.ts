// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDH7GLv3ES7_g7ErrdrGKJ3dn2WU6fzT2g',
  authDomain: 'portfolio-workout-tracker.firebaseapp.com',
  projectId: 'portfolio-workout-tracker',
  storageBucket: 'portfolio-workout-tracker.firebasestorage.app',
  messagingSenderId: '263589849483',
  appId: '1:263589849483:web:07d47bafebc5187ac8a78e',
  measurementId: 'G-Z21MWHJP60',
}

// ✅ Initialize Firebase *first*
const app = initializeApp(firebaseConfig)

// ✅ Then safely try to enable Analytics
isSupported().then((yes) => {
  if (yes) {
    const analytics = getAnalytics(app)
    console.log('🔥 Analytics enabled')
  } else {
    console.warn('⚠️ Analytics not supported in this environment')
  }
})

// ✅ Export Firestore + Auth
export const db = getFirestore(app)
export const auth = getAuth(app)

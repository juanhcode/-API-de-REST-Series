import {initializeApp} from 'firebase/app'
import admin from 'firebase-admin';
import serviceAccount from './serviceAccount.json'
import  {ServiceAccount} from 'firebase-admin';
import * as dotenv from 'dotenv'
dotenv.config();
const firebaseConfig = {
    apiKey:"AIzaSyC2T3JeOh1NATQiXGWwjXKWoRQNLYCGDxo",
    authDomain:process.env.AUTHDOMAIN,
    projectId:process.env.PROJECTID,
    storageBucket:process.env.STORAGEBUCKET,
    messagingSenderId:process.env.MESSAGINGSENDERID,
    appId:process.env.APPID,
};

const app = initializeApp(firebaseConfig);

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount as ServiceAccount)
})
export default {app,admin};
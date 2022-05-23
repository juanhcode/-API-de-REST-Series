import {initializeApp} from 'firebase/app'
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
export default {app};
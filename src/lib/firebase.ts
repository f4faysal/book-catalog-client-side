import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
     apiKey: "AIzaSyC8f62WnlRt8qQF5rHtVNUeN2mCVubrIns",
     authDomain: "ebook-f4.firebaseapp.com",
     projectId: "ebook-f4",
     storageBucket: "ebook-f4.appspot.com",
     messagingSenderId: "741105885624",
     appId: "1:741105885624:web:857d9427557c19c40aaf4d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

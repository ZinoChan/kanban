// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { createUserWithEmailAndPassword, type UserCredential } from 'firebase/auth';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	signInWithCredential
} from 'firebase/auth';
import { modal } from '../stores/modal';
import { toast } from '../stores/toast';
import { getErrorMessage } from './errorMsg';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Auth
export const auth = getAuth(firebaseApp);

// Sign in with google
export async function signInWithGoogle() {
	const credential = signInWithPopup(auth, new GoogleAuthProvider());
	return loginHandler(credential);
}

// Sign in with email and password
export async function signUpWithEmail(email: string, password: string) {
	const credential = createUserWithEmailAndPassword(auth, email, password);
	return loginHandler(credential);
}

//Login handler
async function loginHandler(promise: Promise<UserCredential>) {
	let res: any, serverError: string;
	try {
		res = await promise;
		modal.set(null);
		toast.set({
			message: 'Login Success!',
			type: 'success'
		});
		serverError = '';
	} catch (err) {
		serverError = getErrorMessage(err);
		console.error(err);
		toast.set({
			message: serverError,
			type: 'error'
		});
	}

	return { res, serverError };
}

// Sign out
export async function firebaseSignOut() {
	await signOut(auth);
	toast.set({
		message: 'Signout Success!'
	});
}

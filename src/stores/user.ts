import { writable } from 'svelte/store';
import { auth } from '../util/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';

export interface UserData {
	email?: string;
	uid?: string;
	displayName?: string;
	photoURL?: string;
}

export const user = writable<User | null>(null);
export const userData = writable<UserData | null>(null);
let unsubData: any;
onAuthStateChanged(auth, async (fbUser) => {
	user.set(fbUser);

	if (fbUser) {
		const { doc, onSnapshot, getFirestore } = await import('firebase/firestore');
		const firestore = getFirestore();
		const userRef = doc(firestore, `users/${fbUser.uid}`);

		unsubData = onSnapshot(userRef, (snap) => {
			userData.set(snap.data() as UserData);
		});
	} else {
		unsubData && unsubData();
		userData.set(null);
	}
});

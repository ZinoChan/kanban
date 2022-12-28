import { dummyData } from '../data';
import { writable } from 'svelte/store';
import type { TData } from 'src/types/Data.types';

const storageData = window?.localStorage?.getItem('data');
const defaultValue = dummyData;
const isBrowser = typeof window !== 'undefined';

const initialValue =
	isBrowser && storageData ? JSON.parse(storageData) ?? defaultValue : defaultValue;

export const data = writable<TData>(initialValue);

data.subscribe((value) => {
	if (isBrowser) {
		window?.localStorage?.setItem('data', JSON.stringify(value));
	}
});

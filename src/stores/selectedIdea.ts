import type { TIdea } from '../types/Data.types';
import { writable } from 'svelte/store';

export const currentIdea = writable<TIdea>({} as TIdea);

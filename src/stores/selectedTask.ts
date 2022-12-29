import type { ITask } from 'src/types/Board.types';
import { writable } from 'svelte/store';

export const currentTask = writable<ITask>({} as ITask);

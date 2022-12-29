import type { ITask } from 'src/types/Board.types';
import { writable } from 'svelte/store';

export const boardColumns = writable<any>([]);

export const subtaskColumns = writable<any>([]);

export const showSubTasksModal = writable<boolean>(false);

export const isSideBarOpen = writable<boolean>(true);

export const currentTask = writable<ITask>({} as ITask);

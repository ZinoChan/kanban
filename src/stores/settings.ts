import { writable } from 'svelte/store';

export const boardColumns = writable<any>([]);

export const subtaskColumns = writable<any>([]);

export const showSubTasksModal = writable<boolean>(false);

export const isSideBarOpen = writable<boolean>(true);

export const showAddTaskModal = writable<boolean>(false);

export const showIdeaModal = writable<boolean>(false);

export const showIdeaDetails = writable<boolean>(false);

export const showNewColModal = writable<boolean>(false);


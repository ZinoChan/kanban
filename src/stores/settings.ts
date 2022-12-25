import type { BoardColumn } from '../types/BoardColumn.types';
import { writable } from 'svelte/store';

export const boardColumns = writable<BoardColumn[]>([]);

export const subtaskColumns = writable<BoardColumn[]>([]);

export const showSubTasksModal = writable<boolean>(false);

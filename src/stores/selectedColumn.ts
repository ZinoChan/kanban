import type { TBoardColumn } from 'src/types/Board.types';
import { writable } from 'svelte/store';

export const currentColumn = writable<TBoardColumn>({} as TBoardColumn);

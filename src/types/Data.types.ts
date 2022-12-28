import type { TBoard } from './Board.types';

export type TData = {
	boards: TBoard[];
	ideas: TIdea[];
};

export type TIdea = {
	name: string;
	tags: string[];
	description: string;
	id: string;
};

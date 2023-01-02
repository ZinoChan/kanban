import type { TBoard } from './Board.types';

export type TData = {
	boards: { [randomId: string]: TBoard };
	ideas: TIdea[];
};

export type TIdea = {
	ideaTitle: string;
	description: string;
	id: string;
};

import { v4 as uuid } from 'uuid';
import type { TBoard, TBoardColumn, TSubTask } from 'src/types/Board.types';

export function randomColor() {
	const values = [
		['#DAAFE9', '#C7DBF5', '#AAD5FB', '#ADE5DA', '#B0EDC3', '#FDF0A4', '#F8D6A2'],
		['#C47ADA', '#90BAEE', '#75BAFA', '#72D5BF', '#73DE8C', '#FBE66E', '#F5B969'],
		['#AE44B7', '#5E7ABC', '#5E7ABC', '#4DACA9', '#63B75A', '#EDBD4A', '#EC9740'],
		['#501B87', '#021B6B', '#0C2794', '#337277', '#2F6A52', '#AE802F', '#AD6127']
	];

	return values[Math.floor(Math.random() * values.length)][
		Math.floor(Math.random() * values[0].length)
	];
}

const slugify = (str: string) =>
	str
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '');

export const addBoardId = (boardId: string, columns: any[]) =>
	columns.reduce((accumulator, value) => {
		return { ...accumulator, [value.id]: { ...value, boardId } };
	}, {});

export const createBoard = (name: string, columns: TBoardColumn[]): TBoard => {
	const boardId = uuid();
	const $columns = addBoardId(boardId, columns);
	return {
		id: boardId,
		slug: slugify(name),
		name,
		columns: $columns
	};
};

export const createBoardColumn = (colName: string, colColor = randomColor(), colTasks = {}) => ({
	colName,
	id: uuid(),
	colColor,
	colTasks
});

export const createTask = (
	boardId: string,
	colId: string,
	taskTitle: string,
	taskDescription: string,
	taskDeadLine: string,
	status: string,
	taskPriority: string,
	subTasks = []
) => ({
	id: uuid(),
	boardId,
	colId,
	taskTitle,
	taskDescription,
	taskPriority,
	taskDeadLine,
	status,
	subTasks
});

export const createSubTask = (title: string): TSubTask => ({
	id: uuid(),
	title,
	isCompleted: false
});

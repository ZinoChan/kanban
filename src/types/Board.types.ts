export type TBoard = {
	id: string;
	slug: string;
	name: string;
	columns: { [randomId: string]: TBoardColumn };
};

export type TBoardColumn = {
	colName: string;
	id: string;
	colColor: string;
	colTasks: { [randomId: string]: ITask };
};
export interface ITask {
	boardId: string;
	colId: string;
	taskTitle: string;
	taskDescription: string;
	taskPriority: string;
	taskDeadLine: string;
	status: string;
	subTasks: TSubTask[];
	id: string;
}

export type TSubTask = { id: string; title: string; isCompleted: boolean };

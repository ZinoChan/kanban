export type TBoard = {
	id: string;
	slug: string;
	name: string;
	columns: TBoardColumn[];
};

export type TBoardColumn = {
	colName: string;
	id: string;
	colColor: string;
	colTasks: ITask[];
};
export interface ITask {
	boardSlug: string;
	taskTitle: string;
	taskDescription: string;
	taskPriority: string;
	taskDeadLine: string;
	status: string;
	subTasks: TSubTask[];
	id: string;
}

export type TSubTask = { id: string; title: string; isCompleted: boolean };

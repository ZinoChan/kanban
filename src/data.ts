export const dummyData = {
	boards: {
		randomId93847: {
			name: 'UI Design',
			id: 'randomId93847',
			slug: 'UI-Design',
			columns: {
				randomColId87: {
					colName: 'todo',
					id: 'randomColId87',
					colColor: '#90BAEE',
					colTasks: {
						randomTaskId12: {
							boardId: 'randomId93847',
							colId: 'randomColId87',
							taskTitle: 'design home page',
							taskDescription: ' design home page component',
							taskPriority: 'important',
							taskDeadLine: '2 jan, 19:00 pm',
							status: 'todo',
							subTasks: [
								{ title: 'design header', isCompleted: false, id: 'randomId515' },
								{ title: 'design hero section', isCompleted: false, id: 'randomid134' }
							],
							id: 'randomTaskId12'
						}
					}
				},
				randomColId09: {
					colName: 'doing',
					id: 'randomColId09',
					colColor: '#90BAEE',
					colTasks: {
						randomTaskId983: {
							boardId: 'randomId93847',
							colId: 'randomColId09',
							taskTitle: 'design system',
							taskDescription: 'design components',
							taskPriority: 'urgent',
							taskDeadLine: '2 jan, 19:00 pm',
							status: 'doing',
							subTasks: [
								{ title: 'design buttons', isCompleted: false, id: 'randomid4234' },
								{ title: 'design icons', isCompleted: true, id: 'randomidkd' }
							],
							id: 'randomTaskId983'
						}
					}
				}
			}
		}
	},
	ideas: [
		{
			name: 'learn vue js',
			tags: ['vue', 'javascript'],
			description: 'learn vue and build a unicorn with it',
			id: '#randomId9'
		}
	]
};

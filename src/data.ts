export const dummyData = {
	boards: [
		{
			name: 'UI Design',
			id: '#randomId1',
			slug: 'UI-Design',
			columns: [
				{
					colName: 'todo',
					id: '#randomId2',
					colColor: '#90BAEE',
					colTasks: [
						{
							boardSlug: 'UI-Design',
							taskTitle: 'design home page',
							taskDescription: ' design home page component',
							taskPriority: 'important',
							taskDeadLine: '2 jan, 19:00 pm',
							status: 'todo',
							subTasks: [
								{ title: 'design header', isCompleted: false, id: 'randomId515' },
								{ title: 'design hero section', isCompleted: false, id: 'randomid134' }
							],
							id: '#randomId4'
						}
					]
				},
				{
					colName: 'doing',
					id: '#randomId547',
					colColor: '#90BAEE',
					colTasks: [
						{
							boardSlug: 'UI-Design',
							taskTitle: 'design system',
							taskDescription: 'design components',
							taskPriority: 'urgent',
							taskDeadLine: '2 jan, 19:00 pm',
							status: 'doing',
							subTasks: [
								{ title: 'design buttons', isCompleted: false, id: 'randomid4234' },
								{ title: 'design icons', isCompleted: true, id: 'randomidkd' }
							],
							id: '#randomId4'
						}
					]
				}
			]
		}
	],
	ideas: [
		{
			name: 'learn vue js',
			tags: ['vue', 'javascript'],
			description: 'learn vue and build a unicorn with it',
			id: '#randomId9'
		}
	]
};
// function removeColumn(inputId: string) {
// 		newBoard.columns.filter(({ id }) => id !== inputId);
// 	}

// 	const newBoardColumn = (colName: string, colColor: string) : TBoardColumn => ({
// 		colName,
// 		id: "randomId3",
// 		colColor,
// 		colTasks: []

// 	})

// 	function addColumn(colName: string, colColor: string) {
// 		newBoard.columns = [
// 			...newBoard.columns,
// 			newBoardColumn(colName, colColor)
// 		]
// 	}

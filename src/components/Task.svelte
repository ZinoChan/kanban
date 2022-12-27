<script lang="ts">
	import type { ITask } from '../types/Board.types';
	import { currentTask, showSubTasksModal } from '../stores/settings';
	import PriorityIcon from './PriorityIcon.svelte';
	export let taskData: ITask;
	let completedCount = taskData
		? taskData.subTasks.filter((subTask) => subTask.isCompleted).length
		: 0;
	function onTaskclick() {
		currentTask.set(taskData);
		showSubTasksModal.update((val) => (val = !val));
	}
</script>

<div
	on:click={onTaskclick}
	on:keyup={null}
	class="cursor-pointer transition duration-75 flex items-center space-x-4 p-4 border border-gray-200 dark:border-dark3 text-sm group dark:hover:bg-dark3 bg-white dark:bg-dark1 rounded-lg max-w-[280px] w-[280px] hover:shadow-md"
>
	<PriorityIcon priority={taskData.taskPriority} />
	<span class="sr-only">
		{taskData.taskPriority}
	</span>
	<div>
		<h3 class=" font-bold text-gray-900 dark:text-gray-200 group-hover:text-primary1 mb-3">
			{taskData.taskTitle}
		</h3>
		<p class="text-bold text-sm text-gray-600 dark:text-gray-300">
			{completedCount} of {taskData.subTasks.length} subtasks
		</p>
	</div>
</div>

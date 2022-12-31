<script lang="ts">
	import { data } from '../stores/data';
	import { currentColumn } from '../stores/selectedColumn';
	import { showAddTaskModal } from '../stores/settings';
	import type { TBoardColumn } from '../types/Board.types';
	import Task from './Task.svelte';
	export let columnData: TBoardColumn;

	$: _columnData = $data.boards[columnData.boardId].columns[columnData.id];

	function onAddTask() {
		currentColumn.set(_columnData);
		showAddTaskModal.set(true);
	}
</script>

<div>
	<div class="flex min-w-[250px] space-x-4">
		<div class="w-full">
			<div class="relative mb-2 flex justify-between items-center">
			<h3
					class="text-sm font-semibold text-gray-800 dark:text-gray-400 uppercase flex space-x-2 items-center"
			>
				<span style="background: {_columnData.colColor};" class="w-3 h-3 rounded-full" />
				<span>
					{_columnData.colName}
					<span>({Object.values(_columnData.colTasks).length})</span>
				</span>
			</h3>
				<DropDown>
					<ul class="py-1  text-sm text-gray-700 dark:text-gray-200">
						<li>
							<button
								on:click={onDelCol}
								class="w-full text-left font-bold capitalize text-red-600  py-2 px-4 hover:bg-gray-100 dark:hover:bg-dark3 "
							>
								Delete
							</button>
						</li>
					</ul>
				</DropDown>
			<button on:click={onAddTask} class="w-full mb-4 btn-theme text-gray-900 dark:text-white"
				>+</button
			>

			<div class="flex flex-col space-y-6">
				{#each Object.values(_columnData.colTasks) as task (task.id)}
					<Task taskData={task} />
				{/each}
			</div>
		</div>
	</div>
</div>

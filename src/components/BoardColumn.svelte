<script lang="ts">
	import type { TBoardColumn } from '../types/Board.types';
	import Task from './Task.svelte';
	export let columnData: TBoardColumn;
</script>

<div>
	<div class="flex space-x-4">
		<div>
			<h3
				class="text-sm font-semibold text-gray-800 dark:text-gray-400 uppercase mb-6 flex space-x-2 items-center"
			>
				<span style="background: {columnData.colColor};" class="w-3 h-3 rounded-full" />
				<span>
					{columnData.colName}
					<span>({columnData.colTasks.length})</span>
				</span>
			</h3>

			<div class="flex flex-col space-y-6">
				{#each columnData.colTasks as task (task.id)}
					<Task taskData={task} />
				{/each}
			</div>
		</div>
	</div>
</div>

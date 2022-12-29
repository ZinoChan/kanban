<script lang="ts">
	import Close from '../svgs/Close.svelte';
	import { fade } from 'svelte/transition';
	import { subtaskColumns, showAddTaskModal } from '../stores/settings';
	import SubTaskColumn from './Input.svelte';
	import { currentColumn } from '../stores/selectedColumn';
	import newUniqueId from 'locally-unique-id-generator';
	import type { TInputData } from '../types/BoardColumn.types';
	import { createSubTask, createTask } from '../util/helpers';
	import { data } from '../stores/data';

	$subtaskColumns = [];
	let taskTitle = '';
	let taskDescription = '';
	let taskPriority = '';

	function removeColumn(inputId: number) {
		$subtaskColumns = $subtaskColumns.filter(({ id }: { id: any }) => id !== inputId);
	}

	function addTask() {
		$subtaskColumns = [
			...$subtaskColumns,
			{
				id: newUniqueId(),
				value: ''
			}
		];
	}

	function handleSubmit() {
		let subTasks = $subtaskColumns.map((col: TInputData) => createSubTask(col.value));
		let newTask = createTask(
			$currentColumn.boardId,
			$currentColumn.id,
			taskTitle,
			taskDescription,
			'25 sep',
			$currentColumn.colName,
			taskPriority.toLowerCase(),
			subTasks
		);
		let newData = $data;
		newData.boards[$currentColumn.boardId].columns[$currentColumn.id].colTasks[newTask.id] =
			newTask;

		data.set(newData);
		showAddTaskModal.set(false);
	}
</script>

<!-- on:keyup is a fix to svelte(a11y-click-events-have-key-events) warning  -->
<div
	on:click|self={() => showAddTaskModal.set(false)}
	on:keyup={null}
	class={`${
		$showAddTaskModal ? '' : 'hidden'
	} fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-opacity-80 bg-gray-300 dark:bg-dark4 dark:bg-opacity-90 w-screen h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
>
	<div
		class="modal-box relative w-full h-full max-w-md md:h-auto max-h-[calc(100vh-64px)] overflow-y-auto"
	>
		<div class="relative bg-white rounded-lg shadow dark:bg-dark2">
			<button
				type="button"
				on:click={() => showAddTaskModal.set(false)}
				class="absolute border border-gray-300 dark:border-dark3 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
			>
				<Close />
				<span class="sr-only">Close modal</span>
			</button>
			<div class="px-6 py-6 lg:px-8">
				<h2
					class="text-lg font-bold text-gray-800 dark:text-gray-400 uppercase mb-3 flex space-x-2 items-center justify-center"
				>
					<span style="background: {$currentColumn.colColor};" class="w-3 h-3 rounded-full" />
					<span>
						{$currentColumn.colName}'s
					</span>
				</h2>
				<h3 class="mb-4  font-bold text-gray-900 dark:text-white capitalize">Add new Task</h3>
				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div>
						<label for="title" class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200"
							>Title</label
						>
						<input
							bind:value={taskTitle}
							type="text"
							class="form-input"
							placeholder="e.g. Web Design"
							required
						/>
					</div>
					<div>
						<label
							for="description"
							class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200"
							>Description</label
						>

						<textarea
							rows="6"
							class="form-input"
							bind:value={taskDescription}
							placeholder="e.g. brief information about the Task Activity. This will help the Assigned Person to what is the task about."
						/>
					</div>
					<div transition:fade>
						<label
							for="sub tasks"
							class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200">Sub Tasks</label
						>

						{#each $subtaskColumns as column}
							<SubTaskColumn {removeColumn} inputData={column} />
						{/each}
					</div>
					<button type="button" on:click={addTask} class="btn-secondary w-full">add SubTask</button>
					<div class="mb-3">
						<label
							for="priority"
							class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200">Priority</label
						>
						<div class=" w-full">
							<select bind:value={taskPriority} class="form-select">
								<option selected>Urgent</option>
								<option>Important</option>
								<option>Later</option>
								<option>Last Minute</option>
							</select>
						</div>
					</div>

					<button type="submit" class="btn-primary w-full">Add Task</button>
				</form>
			</div>
		</div>
	</div>
</div>

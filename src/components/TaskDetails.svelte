<script lang="ts">
	import { showSubTasksModal } from '../stores/settings';
	import Close from '../svgs/Close.svelte';
	import { currentTask } from '../stores/selectedTask';
	import type { ITask } from '../types/Board.types';
	import { data } from '../stores/data';
	import DropDown from './DropDown.svelte';
	import DeleteModal from './DeleteModal.svelte';

	$: task =
		$data.boards[$currentTask.boardId]?.columns[$currentTask.colId]?.colTasks[$currentTask.id];

	let showDelModal = false;

	$: completedCount = task ? task.subTasks.filter((subTask) => subTask.isCompleted).length : 0;

	function updateSubTask(id: string) {
		task.subTasks = task.subTasks.map((t) => {
			if (t.id === id) return { ...t, isCompleted: !t.isCompleted };
			else return t;
		});

		let newData = $data;
		newData.boards[task.boardId].columns[task.colId].colTasks[task.id] = task;

		data.set(newData);
	}

	function onCloseModal() {
		currentTask.set({} as ITask);
		showSubTasksModal.set(false);
	}
</script>

<div
	on:click|self={onCloseModal}
	on:keyup={null}
	class={`${
		$showSubTasksModal ? '' : 'hidden'
	} fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-opacity-80 bg-gray-300 dark:bg-dark4 dark:bg-opacity-90 w-screen h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
>
	<div
		class="modal-box relative w-full h-full max-w-md md:h-auto max-h-[calc(100vh-64px)] overflow-y-auto"
	>
		<div class="relative bg-white rounded-lg shadow dark:bg-dark2">
			<div class="absolute flex items-center top-3 right-2.5 space-x-3">
				<DropDown>
					<ul class="py-1  text-sm text-gray-700 dark:text-gray-200">
						<li>
							<button
								class="w-full text-left font-bold capitalize  py-2 px-4 hover:bg-gray-100 dark:hover:bg-dark3 dark:hover:text-white"
							>
								Edit
							</button>
						</li>
						<li>
							<button
								on:click={() => (showDelModal = !showDelModal)}
								class="w-full text-left font-bold capitalize text-red-600  py-2 px-4 hover:bg-gray-100 dark:hover:bg-dark3 "
							>
								Delete
							</button>
						</li>
					</ul>
				</DropDown>
				<button
					type="button"
					on:click={onCloseModal}
					class="border border-gray-300 dark:border-dark3  text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
				>
					<Close />
					<span class="sr-only">Close modal</span>
				</button>
			</div>

			<div class="px-6 py-6 lg:px-8">
				<h3 class="mb-4 capitalize text-xl font-bold text-gray-900 dark:text-white">
					{task?.taskTitle}
				</h3>
				<form class="space-y-6" action="#">
					<div>
						{#if task && task.subTasks?.length > 0}
							<span class="block mb-4 font-bold text-gray-900 dark:text-gray-200">
								{completedCount} of {task?.subTasks.length || 0} subtasks
							</span>

							{#each task.subTasks as { title, isCompleted, id } (id)}
								<div
									on:click={() => updateSubTask(id)}
									on:keyup={() => updateSubTask(id)}
									class={`${
										isCompleted && 'line-through text-gray-400'
									} flex items-center py-2 pl-4 rounded border mb-2 border-gray-200 hover:bg-gray-200 dark:hover:bg-dark3 cursor-pointer dark:border-dark3 bg-light dark:bg-dark1`}
								>
									<input
										type="checkbox"
										checked={isCompleted}
										class="w-4 h-4 mr-2 text-primary3 bg-gray-100 rounded border-gray-300 focus:ring-primary3 dark:focus:primary3 dark:ring-offset-dark3 focus:ring-1 dark:bg-dark2 dark:border-dark3"
									/>
									<label
										for={title}
										class={`${
											isCompleted ? 'done' : ''
										} contents ml-2 cursor-pointer w-full text-sm font-bold capitalize text-gray-900 dark:text-gray-300`}
									>
										{title}
									</label>
								</div>
							{/each}
						{/if}
						<div class="mt-4">
							<label
								for="status"
								class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200">Status</label
							>
							<div class=" w-full">
								<select class="form-select">
									<option selected>Todo</option>
									<option value="1">Doing</option>
									<option value="2">Done</option>
									<option value="3">later</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<DeleteModal bind:showDelModal>
	<h3 class="mt-4 font-bold text-lg text-red-500 mb-6 capitalize">Delete this task</h3>
	<p class="font-bold text-sm text-gray-400 mb-4">
		Are you sure you want to delete the 'Design Home page' task and its subtasks? This action cannot
		be reversed.
	</p>
	<button class="w-full btn-danger mb-4"> delete task </button>
</DeleteModal>

<style>
	.done {
		@apply text-gray-400;
		text-decoration: inherit;
	}
</style>

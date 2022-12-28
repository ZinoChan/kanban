<script lang="ts">
	import Close from '../svgs/Close.svelte';
	import { fade } from 'svelte/transition';
	import { subtaskColumns } from '../stores/settings';
	import SubTaskColumn from './Input.svelte';
	export let showTaskModal: Boolean;
	$subtaskColumns = [];

	function removeColumn(inputId: number) {
		$subtaskColumns = $subtaskColumns.filter(({ id }: { id: any }) => id !== inputId);
	}

	function addTask() {
		$subtaskColumns = [
			...$subtaskColumns,
			{
				id: $subtaskColumns.length + 1,
				value: ''
			}
		];
	}
</script>

<!-- on:keyup is a fix to svelte(a11y-click-events-have-key-events) warning  -->
<div
	on:click|self={() => (showTaskModal = false)}
	on:keyup={null}
	class={`${
		showTaskModal ? '' : 'hidden'
	} fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-opacity-80 bg-gray-300 dark:bg-dark4 dark:bg-opacity-90 w-screen h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
>
	<div
		class="modal-box relative w-full h-full max-w-md md:h-auto max-h-[calc(100vh-64px)] overflow-y-auto"
	>
		<div class="relative bg-white rounded-lg shadow dark:bg-dark2">
			<button
				type="button"
				on:click={() => (showTaskModal = !showTaskModal)}
				class="absolute border border-gray-300 dark:border-dark3 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
			>
				<Close />
				<span class="sr-only">Close modal</span>
			</button>
			<div class="px-6 py-6 lg:px-8">
				<h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white capitalize">
					Add new Task
				</h3>
				<form class="space-y-6" action="#">
					<div>
						<label for="title" class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200"
							>Title</label
						>
						<input type="text" class="form-input" placeholder="e.g. Web Design" required />
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
							placeholder="e.g. brief information about the Task Activity. This will help the Assigned Person to what is the task about."
						/>
					</div>
					<div transition:fade>
						<label
							for="sub tasks"
							class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200">Sub Tasks</label
						>
						<input
							type="text"
							class="form-input mb-3"
							placeholder="e.g. Add responsive style.."
							required
						/>
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
							<select class="form-select">
								<option selected>Urgent</option>
								<option value="1">Important</option>
								<option value="2">Later</option>
								<option value="3">Last Minute</option>
							</select>
						</div>
					</div>
					<div class="mb-2">
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
					<button type="submit" class="btn-primary w-full">Add Task</button>
				</form>
			</div>
		</div>
	</div>
</div>

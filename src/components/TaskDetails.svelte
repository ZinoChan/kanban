<script lang="ts">
	import MoreVertical from '../svgs/MoreVertical.svelte';
	import { showSubTasksModal } from '../stores/settings';
	import Close from '../svgs/Close.svelte';
	import DeleteTask from './DeleteTask.svelte';
	let showDropDown = false;
	let subtasks = [{ id: 2, value: 'design header', checked: false }];
	let showDelModal = false;
</script>

<div
	on:click|self={() => showSubTasksModal.set(false)}
	on:keyup={null}
	class={`${
		$showSubTasksModal ? '' : 'hidden'
	} fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-opacity-80 bg-gray-300 dark:bg-dark4 dark:bg-opacity-90 w-screen h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
>
	<div
		class="modal-box relative w-full h-full max-w-md md:h-auto max-h-[calc(100vh-64px)] overflow-y-auto"
	>
		<!-- Modal content -->
		<div class="relative bg-white rounded-lg shadow dark:bg-dark2">
			<div class="absolute flex items-center top-3 right-2.5 space-x-3">
				<button
					on:click={() => (showDropDown = !showDropDown)}
					class="inline-flex items-center p-2 text-sm font-medium text-center group"
					type="button"
				>
					<MoreVertical />
				</button>
				<button
					type="button"
					on:click={() => showSubTasksModal.set(false)}
					class="border border-gray-300 dark:border-dark3  text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
				>
					<Close />
					<span class="sr-only">Close modal</span>
				</button>
			</div>
			<div
				class={`${
					showDropDown ? 'flex flex-col' : 'hidden'
				} absolute top-12 right-2 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-dark4 dark:divide-gray-600`}
			>
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
			</div>

			<div class="px-6 py-6 lg:px-8">
				<h3 class="mb-4 capitalize text-xl font-bold text-gray-900 dark:text-white">
					Design Home Page
				</h3>
				<form class="space-y-6" action="#">
					<div>
						<span class="block mb-4 font-bold text-gray-900 dark:text-gray-200">
							Subtasks (1 of 1)
						</span>

						{#each subtasks as task}
							<div
								on:click={() => (task.checked = !task.checked)}
								on:keyup={() => (task.checked = !task.checked)}
								class={`${
									task.checked && 'line-through text-gray-400'
								} flex items-center py-2 pl-4 rounded border mb-2 border-gray-200 hover:bg-gray-200 dark:hover:bg-dark3 cursor-pointer dark:border-dark3 bg-light dark:bg-dark1`}
							>
								<input
									type="checkbox"
									checked={task.checked}
									class="w-4 h-4 mr-2 text-primary3 bg-gray-100 rounded border-gray-300 focus:ring-primary3 dark:focus:primary3 dark:ring-offset-dark3 focus:ring-1 dark:bg-dark2 dark:border-dark3"
								/>
								<label
									for={task.value}
									class={`${
										task.checked ? 'done' : ''
									} contents ml-2 cursor-pointer w-full text-sm font-bold capitalize text-gray-900 dark:text-gray-300`}
								>
									{task.value}
								</label>
							</div>
						{/each}
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
<DeleteTask bind:showDelModal />

<style>
	.done {
		@apply text-gray-400;
		text-decoration: inherit;
	}
</style>

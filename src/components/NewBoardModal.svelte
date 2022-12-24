<script lang="ts">
	import Close from '../svgs/Close.svelte';
	import { fade } from 'svelte/transition';
	import { boardColumns } from '../stores/settings';
	import BoardColumn from './Input.svelte';
	export let showBoardModal: Boolean;
	$boardColumns = [];

	function removeColumn(inputId: number) {
		$boardColumns = $boardColumns.filter(({ id }) => id !== inputId);
	}

	function addColumn() {
		$boardColumns = [
			...$boardColumns,
			{
				id: $boardColumns.length + 1,
				value: ''
			}
		];
	}
</script>

<!-- on:keyup is a fix to svelte(a11y-click-events-have-key-events) warning  -->
<div
	on:click|self={() => (showBoardModal = false)}
	on:keyup={null}
	class={`${
		showBoardModal ? '' : 'hidden'
	} fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-opacity-80 bg-gray-300 dark:bg-dark4 dark:bg-opacity-90 w-screen h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
>
	<div
		class="modal-box relative w-full h-full max-w-md md:h-auto max-h-[calc(100vh-64px)] overflow-y-auto"
	>
		<!-- Modal content -->
		<div class="relative bg-white rounded-lg shadow dark:bg-dark2">
			<button
				type="button"
				on:click={() => (showBoardModal = !showBoardModal)}
				class="absolute border border-gray-300 dark:border-dark3 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
			>
				<Close />
				<span class="sr-only">Close modal</span>
			</button>
			<div class="px-6 py-6 lg:px-8">
				<h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add new board</h3>
				<form class="space-y-6" action="#">
					<div>
						<label
							for="board name"
							class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200"
							>Board Name</label
						>
						<input type="text" class="form-input" placeholder="e.g. Web Design" required />
					</div>

					<div transition:fade>
						<label
							for="board columns"
							class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200"
							>Board Columns</label
						>
						<input type="text" class="form-input mb-3" placeholder="e.g. Todo.." required />
						{#each $boardColumns as column}
							<BoardColumn {removeColumn} inputData={column} />
						{/each}
					</div>
					<button type="button" on:click={addColumn} class="btn-secondary w-full">add Column</button
					>
					<button type="submit" class="btn-primary w-full">Create Board</button>
				</form>
			</div>
		</div>
	</div>
</div>

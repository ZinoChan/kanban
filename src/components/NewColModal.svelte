<script lang="ts">
	import { data } from '../stores/data';
	import Close from '../svgs/Close.svelte';
	import { boardColumns, showNewColModal } from '../stores/settings';
	import { addBoardId, createBoardColumn, randomColor } from '../util/helpers';
	import newUniqueId from 'locally-unique-id-generator';
	import type { TInputData } from '../types/BoardColumn.types';
	import { currentBoardId } from '../stores/selectedBoard';
	import ColorPicker from './ColorPicker.svelte';
	import BoardColumn from './Input.svelte';

	$boardColumns = [];

	$: boardName = $data.boards[$currentBoardId]?.name;

	let firstCol = {
		id: newUniqueId(),
		value: '',
		color: '#501B87'
	};

	function removeColumn(inputId: number) {
		$boardColumns = $boardColumns.filter(({ id }: { id: any }) => id !== inputId);
	}

	function addColumn() {
		let color = randomColor();
		$boardColumns = [
			...$boardColumns,
			{
				id: newUniqueId(),
				value: '',
				color
			}
		];
	}

	function handleSubmit() {
		const columns = $boardColumns.map((col: TInputData) => createBoardColumn(col.value, col.color));
		columns.push(createBoardColumn(firstCol.value, firstCol.color));
		const _columns = addBoardId($currentBoardId, columns);

		let newData = $data;
		newData.boards[$currentBoardId].columns = {
			...$data.boards[$currentBoardId].columns,
			..._columns
		};

		data.set(newData);
		showNewColModal.set(false);
	}
</script>

<div
	on:click|self={() => showNewColModal.set(false)}
	on:keyup={null}
	class={`${
		$showNewColModal ? '' : 'hidden'
	} fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-opacity-80 bg-gray-300 dark:bg-dark4 dark:bg-opacity-90 w-screen h-screen p-4 overflow-x-visible overflow-y-auto md:inset-0 h-modal md:h-full`}
>
	<div
		class="modal-box relative w-full h-full max-w-md md:h-auto max-h-[calc(100vh-64px)] overflow-visible"
	>
		<div class="relative bg-white rounded-lg shadow dark:bg-dark2">
			<button
				type="button"
				on:click={() => showNewColModal.set(false)}
				class="absolute border border-gray-300 dark:border-dark3 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
			>
				<Close />
				<span class="sr-only">Close modal</span>
			</button>
			<div class="px-6 py-6 lg:px-8">
				<h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
					Add new Column to Board: {boardName}
				</h3>
				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div>
						<label
							for="board columns"
							class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200"
							>Board Columns</label
						>
						<div class="flex items-center space-x-2 mb-3">
							<input
								bind:value={firstCol.value}
								type="text"
								class="form-input"
								placeholder="e.g. Todo.."
								required
							/>
							<ColorPicker bind:value={firstCol.color} />
						</div>
						{#each $boardColumns as column}
							<BoardColumn isBoard {removeColumn} inputData={column} />
						{/each}
					</div>
					<button type="button" on:click={addColumn} class="btn-secondary w-full">add Column</button
					>
					<button type="submit" class="btn-primary w-full">Create New Column</button>
				</form>
			</div>
		</div>
	</div>
</div>

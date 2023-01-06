<script lang="ts">
	import Close from '../svgs/Close.svelte';
	import { showEditBoard } from '../stores/settings';
	import { currentBoardId } from '../stores/selectedBoard';
	import { data } from '../stores/data';

	$: currentBoard = $data.boards[$currentBoardId];
	$: boardCols = currentBoard?.columns && Object.values(currentBoard?.columns);
	$: newCols = [] as TBoardColumn[];

	function addNewCol() {
		let color = randomColor();
		newCols = [
			...newCols,
			{
				colName: '',
				boardId: currentBoard.id,
				id: uuid(),
				colColor: color,
				colTasks: {}
			}
		];
	}

	function removeColumn(id: string) {
		boardCols = boardCols.filter((col) => id !== col.id);
	}
	function removeCols(id: string) {
		newCols = newCols.filter((col) => id !== col.id);
	}

</script>

<div
	on:click|self={() => showEditBoard.set(false)}
	on:keyup={null}
	class={`${
		$showEditBoard ? '' : 'hidden'
	} fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-opacity-80 bg-gray-300 dark:bg-dark4 dark:bg-opacity-90 w-screen h-screen p-4 overflow-x-visible overflow-y-auto md:inset-0 h-modal md:h-full`}
>
	<div
		class="modal-box relative w-full h-full max-w-md md:h-auto max-h-[calc(100vh-64px)] overflow-visible"
	>
		<div class="relative bg-white rounded-lg shadow dark:bg-dark2">
			<button
				type="button"
				on:click={() => showEditBoard.set(false)}
				class="absolute border border-gray-300 dark:border-dark3 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
			>
				<Close />
				<span class="sr-only">Close modal</span>
			</button>
			<div class="px-6 py-6 lg:px-8">
				<h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
					Edit {currentBoard?.name} Board
				</h3>
				<form class="space-y-6">
					<div>
						<label
							for="board name"
							class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200"
							>Board Name</label
						>
						<input type="text" class="form-input" placeholder="e.g. Web Design" required />
					</div>

					<div>
						<label
							for="board columns"
							class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200"
							>Board Columns</label
						>
						{#if boardCols}
							{#each boardCols as column}
								<div class="flex mb-3 items-center space-x-2">
									<div class="flex items-center space-x-1">
										<input
											bind:value={column.colName}
											type="text"
											class="form-input"
											placeholder="Your title.."
										/>
										<div>
											<ColorPicker bind:value={column.colColor} />
										</div>
									</div>

									<button
										on:click={() => removeColumn(column.id)}
										type="button"
										class="border border-gray-300 dark:border-dark3  text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
									>
										<Close />
										<span class="sr-only">remove column</span>
									</button>
								</div>
							{/each}
						{/if}
						{#each newCols as column}
							<div class="flex mb-3 items-center space-x-2">
								<div class="flex items-center space-x-1">
									<input
										bind:value={column.colName}
										type="text"
										class="form-input"
										placeholder="Your title.."
									/>
									<div>
										<ColorPicker bind:value={column.colColor} />
									</div>
								</div>

								<button
									on:click={() => removeCols(column.id)}
									type="button"
									class="border border-gray-300 dark:border-dark3  text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
								>
									<Close />
									<span class="sr-only">remove column</span>
								</button>
							</div>
						{/each}
					</div>
					<button on:click={addNewCol} type="button" class="btn-secondary w-full">add Column</button
					>
				</form>
			</div>
		</div>
	</div>
</div>

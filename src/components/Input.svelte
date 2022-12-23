<script lang="ts">
	import type { BoardColumn } from 'src/types/BoardColumn.types';
	export let inputData: BoardColumn;
	export let removeColumn: any;
	import Close from '../svgs/Close.svelte';
</script>

<div class="flex mb-3 items-center space-x-2">
	<input value={inputData.value} type="text" class="form-input" placeholder="Your title.." />
	<button
		on:click={() => removeColumn(inputData.id)}
		type="button"
		class="border border-gray-300 dark:border-dark3  text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
	>
		<Close />
		<span class="sr-only">remove column</span>
	</button>
</div>

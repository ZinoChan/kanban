<script lang="ts">
	import type { TInputData } from '../types/BoardColumn.types';
	import ColorPicker from './ColorPicker.svelte';
	import Close from '../svgs/Close.svelte';
	export let inputData: TInputData;
	export let removeColumn: any;
	export let isBoard = false;
</script>

<div class="flex mb-3 items-center space-x-2">
	{#if isBoard}
		<div class="flex items-center space-x-1">
			<input
				bind:value={inputData.value}
				type="text"
				class="form-input"
				placeholder="Your title.."
			/>
			<div>
				<ColorPicker bind:value={inputData.color} />
			</div>
		</div>
	{:else}
		<input bind:value={inputData.value} type="text" class="form-input" placeholder="Your title.." />
	{/if}
	<button
		on:click={() => removeColumn(inputData.id)}
		type="button"
		class="border border-gray-300 dark:border-dark3  text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
	>
		<Close />
		<span class="sr-only">remove column</span>
	</button>
</div>

<script lang="ts">
	/** @type {import('./$types').PageData} */
	import type { TBoard } from '../../../types/Board.types';
	import { isSideBarOpen } from '../../../stores/settings';
	import BoardColumnsList from '../../../components/BoardColumnsList.svelte';
	export let data: TBoard;
</script>

<section
	class={`main-container ${
		$isSideBarOpen ? 'sm:translate-x-[256px] lg:translate-x-[300px]' : 'translate-x-0'
	}`}
>
	<div class="flex space-x-4 items-center mb-8">
		<h1 class="font-bold text-gray-900 dark:text-gray-100 text-2xl capitalize">
			{data.name}
		</h1>
		<button on:click={onDeleteBoard} class="group btn-theme  p-1">
			<Trash />
		</button>

		<button
			on:click={onEditBoard}
			class="edit-btn btn-theme  text-gray-500 transition duration-7 dark:text-gray-400 p-1"
		>
			<Edit />
		</button>
		<button on:click={onAddCol} class="group btn-theme p-1">
			<Plus />
		</button>
	</div>
	{#if data}
		<div class="flex  space-x-6">
			<BoardColumnsList boardData={data} />
		</div>
	{:else}
		<div class="text-gray-500">loading data...</div>
	{/if}
</section>

<style lang="scss">
	.edit-btn:hover {
		color: rgb(8 145 178) !important;
	}
</style>

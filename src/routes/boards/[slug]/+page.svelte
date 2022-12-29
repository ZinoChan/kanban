<script lang="ts">
	/** @type {import('./$types').PageData} */
	import type { TBoard } from '../../../types/Board.types';
	import { isSideBarOpen } from '../../../stores/settings';
	import BoardColumn from '../../../components/BoardColumn.svelte';
	export let data: TBoard;
</script>

<section
	class={`main-container ${
		$isSideBarOpen ? 'sm:translate-x-[256px] lg:translate-x-[300px]' : 'translate-x-0'
	}`}
>
	{#if data}
		<div class="flex items-center space-x-6">
			{#each Object.values(data.columns) as column (column.id)}
				<BoardColumn columnData={column} />
			{/each}
		</div>
	{:else}
		<div class="text-gray-500">loading data...</div>
	{/if}
</section>

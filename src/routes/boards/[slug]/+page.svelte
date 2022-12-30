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
	{#if data}
		<div class="flex  space-x-6">
			<BoardColumnsList boardData={data} />
		</div>
	{:else}
		<div class="text-gray-500">loading data...</div>
	{/if}
</section>

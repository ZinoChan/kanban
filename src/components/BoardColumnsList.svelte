<script lang="ts">
	import { data } from '../stores/data';
	import type { TBoard } from '../types/Board.types';
	import BoardColumn from './BoardColumn.svelte';

	export let boardData: TBoard;

	$: _colList = Object.values($data.boards[boardData.id].columns);
</script>

<div class="flex  space-x-6">
	{#each _colList as column (column.id)}
		<BoardColumn columnData={column} />
	{/each}
</div>

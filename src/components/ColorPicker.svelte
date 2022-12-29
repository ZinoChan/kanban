<script lang="ts">
	import { randomColor } from '../util/helpers';
	import clickOutside from '../util/clickOutside';

	export let value = randomColor();
	const values = [
		['#DAAFE9', '#C7DBF5', '#AAD5FB', '#ADE5DA', '#B0EDC3', '#FDF0A4', '#F8D6A2'],
		['#C47ADA', '#90BAEE', '#75BAFA', '#72D5BF', '#73DE8C', '#FBE66E', '#F5B969'],
		['#AE44B7', '#5E7ABC', '#5E7ABC', '#4DACA9', '#63B75A', '#EDBD4A', '#EC9740'],
		['#501B87', '#021B6B', '#0C2794', '#337277', '#2F6A52', '#AE802F', '#AD6127']
	];
	let ddActive = false;

	async function toggleDropdown() {
		ddActive = !ddActive;
	}

	function clickOutsideDropdown(event: any) {
		ddActive = false;
	}

	function changeValue(innerValue: string) {
		value = innerValue;
		ddActive = false;
	}
</script>

<div class="relative">
	<div class="flex h-full">
		<button
			type="button"
			class="border border-gray-300 dark:border-dark3 p-1 rounded mr-2 bg-white dark:bg-dark2 h-auto"
			on:click={(e) => toggleDropdown()}
			class:fake-focus={ddActive}
		>
			<div class="flex">
				<div style="background: {value};" class="rounded w-6 h-6 leading-tight text-xs" />

				<div class="caret" style="margin-right: .2rem;" />
			</div>
		</button>
		<input type="text" class="form-input" bind:value />
	</div>

	{#if ddActive}
		<div
			class="p-4 absolute z-20 top-10 bg-white dark:bg-dark2 border border-gray-400 dark:border-dark3 rounded"
			use:clickOutside
		>
			<div class="values-dropdown-grid">
				{#each values as val}
					{#each val as innerValue}
						<button
							type="button"
							class:active={innerValue == value}
							style="background: {innerValue};"
							on:click={() => {
								changeValue(innerValue);
							}}
							class="rounded w-6 h-6 leading-tight text-xs border-none"
						/>
					{/each}
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.caret {
		width: 0;
		height: 0;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-top: 4px solid #555;
		position: relative;
		top: 10px;
		margin-left: 4px;
	}

	/* .caret.top {
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-bottom: 4px solid #555;
		border-top: none;
	} */

	.active {
		box-shadow: inset 0 0 0 1px #fff, 0 0 3px 1px rgba(0, 0, 0, 0.25);
	}

	.values-dropdown-grid {
		grid-template-columns: repeat(7, 24px);
		grid-template-rows: 24px 24px;
		grid-gap: 10px;
		display: grid;
	}
</style>

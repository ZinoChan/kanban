<script>
	import Moon from '../svgs/Moon.svelte';
	import Sun from '../svgs/Sun.svelte';
	import { Body } from 'svelte-body';

	let isDark = true;
</script>

<label class="flex items-center justify-center space-x-6  cursor-pointer">
	<Moon />
	<div>
		<input on:click={() => (isDark = !isDark)} type="checkbox" class="sr-only peer" />
		<div
			class="relative w-9 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-primary1 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary1"
		/>
	</div>
	<Sun />
</label>
{#if isDark}
	<Body class="dark" />
{/if}

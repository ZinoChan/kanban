<script>
	import MoreVertical from '../svgs/MoreVertical.svelte';
	let showDropDown = false;
</script>

<button
	on:click={() => (showDropDown = !showDropDown)}
	class="inline-flex items-center p-2 text-sm font-medium text-center group hover:bg-gray-200 dark:hover:bg-dark3 rounded"
	type="button"
>
	<MoreVertical />
</button>

<div
	class={`${
		showDropDown ? 'flex flex-col' : 'hidden'
	} absolute top-8 right-2 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-dark4 dark:divide-gray-600`}
>
	<ul class="py-1  text-sm text-gray-700 dark:text-gray-200">
		<slot />
	</ul>
</div>

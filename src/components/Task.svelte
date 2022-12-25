<script>
	import Bolt from '../svgs/Bolt.svelte';
	import { showSubTasksModal } from '../stores/settings';
</script>

<div
	on:click={() => showSubTasksModal.update((val) => (val = !val))}
	on:keyup={null}
	class="cursor-pointer transition duration-75 flex items-center space-x-4 p-4 border border-gray-200 dark:border-dark3 text-sm group dark:hover:bg-dark3 bg-white dark:bg-dark1 rounded-lg max-w-[280px] w-[280px] hover:shadow-md"
>
	<Bolt />
	<span class="sr-only">important task</span>
	<div>
		<h3 class=" font-bold text-gray-900 dark:text-gray-200 group-hover:text-primary1 mb-3">
			Build Login page
		</h3>
		<p class="text-bold text-sm text-gray-600 dark:text-gray-300">0 of 2 subtasks</p>
	</div>
</div>

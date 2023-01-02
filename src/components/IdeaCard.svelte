<script>
	import { showIdeaDetails } from '../stores/settings';
</script>

<div
	on:click={() => showIdeaDetails.set(true)}
	on:keyup={null}
	class="cursor-pointer transition duration-75 flex items-center  p-4 border border-gray-200 dark:border-dark3 text-sm group dark:hover:bg-dark3 bg-white dark:bg-dark1 rounded-lg  hover:shadow-md"
>
	<div>
		<h3 class=" font-bold text-gray-900 dark:text-gray-200 group-hover:text-primary3 mb-3">
			build a dashboard
		</h3>
		<p class="text-bold text-sm text-gray-600 dark:text-gray-300">
			Lorem ipsum dolor sit amet consectetur adipisicing elit...
		</p>
	</div>
</div>

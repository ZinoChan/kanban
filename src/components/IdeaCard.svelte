<script lang="ts">
	import { currentIdea } from '../stores/selectedIdea';
	import type { TIdea } from '../types/Data.types';
	import { showIdeaDetails } from '../stores/settings';
	export let idea: TIdea;
	function onIdeaClick() {
		currentIdea.set(idea);
		showIdeaDetails.set(true);
	}
</script>

<div
	on:click={onIdeaClick}
	on:keyup={null}
	class="cursor-pointer transition duration-75 flex items-center  p-4 border border-gray-200 dark:border-dark3 text-sm group dark:hover:bg-dark3 bg-white dark:bg-dark1 rounded-lg  hover:shadow-md"
>
	<div>
		<h3 class=" font-bold text-gray-900 dark:text-gray-200 group-hover:text-primary3 mb-3">
			{idea?.ideaTitle}
		</h3>
		<p class="text-bold text-sm text-gray-600 dark:text-gray-300">
			{idea?.description}
		</p>
	</div>
</div>

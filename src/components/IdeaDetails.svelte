<script>
	import Close from '../svgs/Close.svelte';
	import { currentIdea } from '../stores/selectedIdea';
	import { showIdeaDetails } from '../stores/settings';
	import Bulb from '../svgs/Bulb.svelte';
	import { data } from '../stores/data';

	function onDeleteIdea() {
		let currData = $data;
		currData.ideas = $data.ideas?.filter((idea) => idea.id !== $currentIdea.id);
		data.set(currData);
		showIdeaDetails.set(false);
	}
</script>

<div
	on:click|self={() => showIdeaDetails.set(false)}
	on:keyup={null}
	class={`${
		$showIdeaDetails ? '' : 'hidden'
	} fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-opacity-80 bg-gray-300 dark:bg-dark4 dark:bg-opacity-90 w-screen h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
>
	<div
		class="modal-box relative w-full h-full max-w-md md:h-auto max-h-[calc(100vh-64px)] overflow-y-auto"
	>
		<div class="relative bg-white rounded-lg shadow dark:bg-dark2">
			<button
				type="button"
				on:click={() => showIdeaDetails.set(false)}
				class="absolute border border-gray-300 dark:border-dark3 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
			>
				<Close />
				<span class="sr-only">Close modal</span>
			</button>
			<div class="px-6 py-6 lg:px-8">
				<div class="flex items-center justify-center mb-4 text-2xl">
					<Bulb />
				</div>
				<div class="mb-6">
					<span class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Title:</span>
					<h3 class="mb-4 capitalize text-xl font-bold text-gray-900 dark:text-white">
						{$currentIdea?.ideaTitle}
					</h3>
					<span class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400"
						>description:</span
					>
					<p class="block font-bold text-gray-900 dark:text-gray-200">
						{$currentIdea?.description}
					</p>
				</div>
				<button
					on:click={onDeleteIdea}
					class="btn-theme py-3 w-full text-red-600 hover:text-red-500"
				>
					delete idea
				</button>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import Close from '../svgs/Close.svelte';
	import { v4 as uuid } from 'uuid';
	import { data } from '../stores/data';
	import { showIdeaModal } from '../stores/settings';

	let ideaTitle = '';
	let ideaDescription = '';

	const handleSubmit = () => {
		let newIdea = { id: uuid(), ideaTitle, description: ideaDescription };
		let newData = $data;
		newData.ideas.push(newIdea);
		data.set(newData);
		showIdeaModal.set(false);
	};
</script>

<div
	on:click|self={() => showIdeaModal.set(false)}
	on:keyup={null}
	class={`${
		$showIdeaModal ? '' : 'hidden'
	} fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-opacity-80 bg-gray-300 dark:bg-dark4 dark:bg-opacity-90 w-screen h-screen p-4 overflow-x-visible overflow-y-auto md:inset-0 h-modal md:h-full`}
>
	<div
		class="modal-box relative w-full h-full max-w-md md:h-auto max-h-[calc(100vh-64px)] overflow-visible"
	>
		<div class="relative bg-white rounded-lg shadow dark:bg-dark2">
			<button
				type="button"
				on:click={() => showIdeaModal.set(false)}
				class="absolute border border-gray-300 dark:border-dark3 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
			>
				<Close />
				<span class="sr-only">Close modal</span>
			</button>
			<div class="px-6 py-6 lg:px-8">
				<h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add new Idea</h3>
				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div>
						<label
							for="board name"
							class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200"
							>Idea Title</label
						>
						<input
							bind:value={ideaTitle}
							type="text"
							class="form-input"
							placeholder="e.g. Design cooking app"
							required
						/>
					</div>

					<div>
						<label
							for="description"
							class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-200"
							>Description</label
						>

						<textarea
							rows="6"
							class="form-input"
							bind:value={ideaDescription}
							placeholder="e.g. brief information about the idea."
						/>
					</div>

					<button type="submit" class="btn-primary w-full">Create Idea</button>
				</form>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import Close from '../svgs/Close.svelte';

	export let showDelModal: Boolean;
</script>

<div
	on:click|self={() => (showDelModal = !showDelModal)}
	on:keyup={null}
	class={`${
		showDelModal ? '' : 'hidden'
	} fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-opacity-80 bg-gray-300 dark:bg-dark4 dark:bg-opacity-90 w-screen h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
>
	<div
		class="modal-box relative w-full h-full max-w-md md:h-auto max-h-[calc(100vh-64px)] overflow-y-auto"
	>
		<div class="relative bg-white rounded-lg shadow dark:bg-dark2 p-6">
			<button
				type="button"
				on:click={() => (showDelModal = !showDelModal)}
				class="absolute top-3 right-2.5 border border-gray-300 dark:border-dark3  text-gray-400 bg-transparent hover:bg-light hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
			>
				<Close />
				<span class="sr-only">Close modal</span>
			</button>
			<slot />
			<button on:click={() => (showDelModal = false)} class="btn-white w-full"> cancel </button>
		</div>
	</div>
</div>

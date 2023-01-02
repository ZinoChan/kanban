<script>
	import Plus from '../../svgs/Plus.svelte';
	import IdeaCard from '../../components/IdeaCard.svelte';
	import { isSideBarOpen, showIdeaModal } from '../../stores/settings';
</script>

<section
	class={` px-12 py-12 transition-all ${
		$isSideBarOpen ? 'sm:translate-x-[256px] lg:translate-x-[300px]' : 'translate-x-0'
	} lg:max-w-[calc(100vw-300px)] sm:max-w-[calc(100vw-256px)] min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)]`}
>
	<div class="flex space-x-4 items-center mb-4">
		<h1 class="font-bold text-gray-900 dark:text-gray-100 text-2xl capitalize">list of ideas</h1>
		<button on:click={() => showIdeaModal.set(true)} class="group btn-theme p-1">
			<Plus />
		</button>
	</div>
	<div class="grid grid-cols-4 gap-6">
		<IdeaCard />
		<IdeaCard />
		<IdeaCard />
		<IdeaCard />
		<IdeaCard />
	</div>
</section>

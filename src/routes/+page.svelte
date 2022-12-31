<script>
	import { currentBoardId } from '../stores/selectedBoard';
	import { isSideBarOpen } from '../stores/settings';

	currentBoardId.set('');
</script>

<section
	class={`transition-all ${
		$isSideBarOpen ? 'sm:translate-x-[256px] lg:translate-x-[300px]' : 'translate-x-0'
	} lg:max-w-[calc(100vw-300px)] sm:max-w-[calc(100vw-256px)] min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)]`}
>
	<div style="min-height: inherit;" class="flex items-center justify-center">
		<div>
			<h1 class="text-3xl mb-4 text-primary1 text-center uppercase font-bold">kanban</h1>
			<h4 class="text-xl text-red-500 font-bold">Web App under development</h4>
		</div>
	</div>
</section>

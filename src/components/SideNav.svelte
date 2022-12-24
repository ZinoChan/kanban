<script>
	import GridSvg from '../svgs/GridSvg.svelte';
	import ChevronDown from '../svgs/ChevronDown.svelte';
	import ListSvg from '../svgs/ListSvg.svelte';
	import ChevronUp from '../svgs/ChevronUp.svelte';
	import PlusSquare from '../svgs/PlusSquare.svelte';
	import Plus from '../svgs/Plus.svelte';
	import LoginSvg from '../svgs/LoginSvg.svelte';
	import SignUpSvg from '../svgs/SignUpSvg.svelte';
	import Close from '../svgs/Close.svelte';
	import Info from '../svgs/Info.svelte';
	import NewBoadModal from './NewBoardModal.svelte';
	import NewTaskModal from './NewTaskModal.svelte';
	let showDropDown = false;
	let showBoardModal = false;
	let showTaskModal = false;
	let boards = [
		{ value: 'Design', id: 'KjaHDxj' },
		{ value: 'Development', id: 'HhTshknd' }
	];
</script>

<div class="fixed top-16 left-0 z-10 transition-all translate-x-[0]">
	<div
		class="border-r border-gray-200 dark:border-dark3 p-4 bg-white w-64 lg:w-[300px] dark:bg-dark1 min-h-screen"
	>
		<div class="py-4 overflow-y-auto">
			<ul class="space-y-2 py-4 mb-4 border-b border-gray-200 dark:border-dark3">
				<li>
					<button
						type="button"
						class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-dark2"
						on:click={() => (showDropDown = !showDropDown)}
					>
						<ListSvg />
						<span class="flex-1 font-bold ml-3 text-left whitespace-nowrap">All Boards</span>
						{#if !showDropDown}
							<ChevronDown />
						{:else}
							<ChevronUp />
						{/if}
					</button>
					<ul class={`${showDropDown ? 'show' : 'hide'} flex-col space-y-2 py-4`}>
						{#each boards as { value, id } (id)}
							<li>
								<a
									href={`/${value}`}
									class="flex space-x-4 items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-dark2"
								>
									<GridSvg />
									<span class="capitalize flex-1 font-bold ml-3 whitespace-nowrap">
										{value}
									</span>
								</a>
							</li>
						{/each}
					</ul>
				</li>

				<li>
					<button
						on:click={() => (showBoardModal = !showBoardModal)}
						class="cursor-pointer flex text-left w-full items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white group hover:bg-gray-100 dark:hover:bg-dark2"
					>
						<PlusSquare />
						<span class="capitalize flex-1 font-bold ml-3 whitespace-nowrap"> add new board </span>
					</button>
				</li>

				<li>
					<button
						on:click={() => (showTaskModal = !showTaskModal)}
						class="cursor-pointer flex text-left w-full items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white group hover:bg-gray-100 dark:hover:bg-dark2"
					>
						<Plus />
						<span class="capitalize flex-1 font-bold ml-3 whitespace-nowrap"> add new task </span>
					</button>
				</li>
				<li>
					<a
						href="/login"
						class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white group hover:bg-gray-100 dark:hover:bg-dark2"
					>
						<LoginSvg />
						<span class="capitalize flex-1 font-bold ml-3 whitespace-nowrap"> login </span>
					</a>
				</li>
				<li>
					<a
						href="/signup"
						class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white group hover:bg-gray-100 dark:hover:bg-dark2"
					>
						<SignUpSvg />
						<span class="capitalize flex-1 font-bold ml-3 whitespace-nowrap"> Sign up </span>
					</a>
				</li>
				<li>
					<a
						href="/signup"
						class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white group hover:bg-gray-100 dark:hover:bg-dark2"
					>
						<LogOut />
						<span class="capitalize flex-1 font-bold ml-3 whitespace-nowrap"> Log Out </span>
					</a>
				</li>
			</ul>
			<div>
				<span
					class="flex items-center p-2 justify-center space-x-2 rounded-lg py-3 group hover:bg-gray-100 dark:hover:bg-dark2"
				>
					<ThemeToggle />
				</span>
			</div>
		</div>
	</div>
</div>
<NewBoadModal bind:showBoardModal />
<NewTaskModal bind:showTaskModal />

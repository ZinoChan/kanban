<script lang="ts">
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
	import Flame from '../svgs/Flame.svelte';
	import NewBoadModal from './NewBoardModal.svelte';
	import NewTaskModal from './NewTaskModal.svelte';
	import LogOut from '../svgs/LogOut.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import SidebarOpen from '../svgs/SidebarOpen.svelte';
	import SidebarClose from '../svgs/SidebarClose.svelte';
	import { isSideBarOpen } from '../stores/settings';
	import { data } from '../stores/data';
	import NewColModal from './NewColModal.svelte';
	export let isBoardPage: boolean;

	$: boardsData = Object.values($data.boards);
	let showDropDown = false;
	let showBoardModal = false;
	let showColModal = false;
</script>

<div
	class={`fixed top-16 left-0 z-10 transition-all ${
		$isSideBarOpen ? 'translate-x-0' : '-translate-x-full'
	}`}
>
	<div
		class="relative border-r border-gray-200 dark:border-dark3 p-4 bg-white w-64 lg:w-[300px] dark:bg-dark1 min-h-screen"
	>
		<button
			on:click={() => isSideBarOpen.update((val) => !val)}
			class={`cursor-pointer z-30 absolute top-0 bg-light hover:bg-gray-300 dark:bg-dark4 dark:hover:dark3 rounded py-1 group px-2 ${
				$isSideBarOpen ? 'right-0' : '-right-[40px]'
			}`}
		>
			{#if $isSideBarOpen}
				<SidebarClose />
			{:else}
				<SidebarOpen />
			{/if}
		</button>
		<div class="py-4 overflow-y-auto">
			<ul class="flex flex-col space-y-2 py-4 mb-4 border-b border-gray-200 dark:border-dark3">
				<li>
					<button
						type="button"
						class="outline-none focus:outline-none flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-dark2"
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
					<ul class={`${showDropDown ? 'flex' : 'hidden'} flex-col space-y-2 py-4`}>
						{#if boardsData && boardsData.length > 0}
							{#each boardsData as { name, slug, id } (id)}
								<li>
									<a
										href={`/boards/${slug}`}
										class="flex space-x-4 items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-dark2"
									>
										<GridSvg />
										<span class="capitalize flex-1 font-bold ml-3 whitespace-nowrap">
											{name}
										</span>
									</a>
								</li>
							{/each}
						{/if}
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
				{#if isBoardPage}
					<li>
						<button
							on:click={() => (showColModal = !showColModal)}
							class="cursor-pointer flex text-left w-full items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white group hover:bg-gray-100 dark:hover:bg-dark2"
						>
							<Plus />
							<span class="capitalize flex-1 font-bold ml-3 whitespace-nowrap">
								add new column
							</span>
						</button>
					</li>
				{/if}

				<li>
					<a
						href="/idea"
						class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white group hover:bg-gray-100 dark:hover:bg-dark2"
					>
						<Flame />
						<span class="capitalize flex-1 font-bold ml-3 whitespace-nowrap"> ideas </span>
					</a>
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

			<div class="p-4 mt-6  rounded-lg bg-primary3 border border-gray-300 dark:border-dark3">
				<div class="flex items-center mb-3">
					<span class="w-6 h-6 inline-block text-gray-300">
						<Info />
					</span>
					<button
						type="button"
						class="ml-auto -mx-1.5 -my-1.5 bg-[#4e4e8a] hover:bg-[#59599c] rounded-lg p-1 text-gray-100 inline-flex h-6 w-6 "
					>
						<span class="sr-only">Close</span>
						<Close />
					</button>
				</div>
				<p class="mb-3 text-gray-300">Login or signup to save your working flow.</p>
			</div>
		</div>
	</div>
</div>
<NewBoadModal bind:showBoardModal />
<NewTaskModal />
<NewColModal bind:showColModal />

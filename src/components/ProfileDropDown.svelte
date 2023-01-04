<script>
	import Trending from '../svgs/Trending.svelte';
	import User from '../svgs/User.svelte';
	import MoreVertical from '../svgs/MoreVertical.svelte';
	import clickOutside from '../util/clickOutside';
	let showDropDown = false;
</script>

<div>
	<button
		on:click={() => (showDropDown = !showDropDown)}
		class="inline-flex items-center p-2 text-sm font-medium text-center group"
		type="button"
		use:clickOutside
		on:click_outside={() => (showDropDown = false)}
	>
		<MoreVertical />
	</button>
	<div
		class={`${
			showDropDown ? 'flex flex-col' : 'hidden'
		} absolute top-full right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-dark3 dark:divide-gray-600`}
	>
		<ul
			class="py-1 text-sm text-gray-700 dark:text-gray-200"
			aria-labelledby="dropdownMenuIconButton"
		>
			<li>
				<a
					href="/profile"
					class="font-bold capitalize flex space-x-2 py-2 px-4 group hover:bg-gray-100 dark:hover:bg-dark4 dark:hover:text-white"
				>
					<User />
					<span class="inline-flex self-end">profile</span>
				</a>
			</li>
			<li>
				<a
					href="/stats"
					class="font-bold capitalize flex  space-x-2 py-2 px-4 group hover:bg-gray-100 dark:hover:bg-dark4 dark:hover:text-white"
				>
					<Trending />
					<span class="inline-flex self-end"> progress </span>
				</a>
			</li>
		</ul>
	</div>
</div>

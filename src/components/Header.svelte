<script>
	import Avatar from './Avatar.svelte';
</script>

<nav
	class="fixed z-10 h-16 min-h-16 max-h-16 top-0 left-0 bg-white px-2 sm:px-4 py-2.5 dark:bg-dark1  w-full border-b border-gray-200 dark:border-dark3"
>
	<div class="container flex flex-wrap items-center justify-between mx-auto">
		<a href="/" class="flex items-center">
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-primary1">
				Kanban
			</span>
		</a>
		<div class="flex md:order-2">
			<Avatar />
		</div>
	</div>
</nav>

<script>
	let showNotification = false;
</script>

<button
	class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
	type="button"
	on:click={() => (showNotification = !showNotification)}
>
	<svg
		class="w-6 h-6"
		aria-hidden="true"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		><path
			d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
		/></svg
	>
	<div class="flex relative">
		<div
			class="inline-flex relative -top-2 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"
		/>
	</div>
</button>
<!-- Dropdown menu -->
<div
	class={`${
		showNotification ? 'block' : 'hidden'
	} absolute top-full right-0 z-20 w-full max-w-sm bg-white rounded-md shadow dark:bg-dark3`}
>
	<div
		class="block py-2 px-4 font-medium text-center text-gray-700 bg-gray-50 dark:bg-dark4 dark:text-white"
	>
		Notifications
	</div>
	<div class="divide-y divide-gray-100 dark:divide-dark1 ">
		<a href="/" class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
			<div class="pl-3 w-full">
				<div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
					urgent task is close to deadline
				</div>
			</div>
		</a>
	</div>
	<a
		href="/"
		class="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-dark4 dark:hover:bg-dark3 dark:text-white"
	>
		<div class="inline-flex items-center ">
			<svg
				class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path
					fill-rule="evenodd"
					d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
					clip-rule="evenodd"
				/></svg
			>
			View all
		</div>
	</a>
</div>

<script>
	import Task from './Task.svelte';
</script>

<div class="p-6">
	<div class="flex space-x-4">
		<div>
			<h3
				class="text-sm font-semibold text-gray-800 dark:text-gray-400 uppercase mb-6 flex space-x-2 items-center"
			>
				<span class="w-3 h-3 bg-green-400 rounded-full" />
				<span
					>todo
					<span>(3)</span>
				</span>
			</h3>

			<div class="flex flex-col space-y-4">
				<Task />
				<Task />
				<Task />
				<Task />
			</div>
		</div>
	</div>
</div>

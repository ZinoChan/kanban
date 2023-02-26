<script>
	export let isLoading = false;
</script>

<div
	class="fixed inset-0 z-50 flex items-center justify-center"
	style={isLoading ? 'display: flex' : 'display: none'}
>
	<div class="absolute inset-0 bg-white opacity-25" />
	<div class="relative">
		<div
			class="inline-block animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"
		/>
	</div>
</div>

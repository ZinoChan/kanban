<script>
	import { currentBoardId } from '../../stores/selectedBoard';
	import Close from '../../svgs/Close.svelte';
	import Edit from '../../svgs/Edit.svelte';
	let isEdit = false;
	currentBoardId.set('');
</script>

<section
	class="transition-all sm:translate-x-[256px] lg:translate-x-[300px] lg:max-w-[calc(100vw-300px)] sm:max-w-[calc(100vw-256px)] min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)]"
>
	<div class="min-h-inherit w-full flex items-center justify-center ">
		<div
			class="relative w-full max-w-lg lg:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-dark1 dark:border-dark3"
		>
			<button
				on:click={() => (isEdit = !isEdit)}
				class="inline-flex absolute -top-2 -right-2 justify-center items-center w-10 h-10 text-xs font-bold text-gray-900 bg-primary2 rounded-full border-2 border-white dark:border-dark3"
			>
				{#if isEdit}
					<Close />
				{:else}
					<Edit />
				{/if}
			</button>
			<form class="space-y-6" action="#">
				<h5 class="text-xl font-bold text-center text-gray-900 dark:text-white">Profile Info</h5>

				<div class="mb-4">
					<label for="fullName" class="form-label">fullName</label>
					<input disabled={!isEdit} type="password" class="form-input" placeholder="Jese Leos" />
				</div>
				<div class="mb-4">
					<label for="email" class="form-label">email</label>
					<input
						disabled={!isEdit}
						type="email"
						class="form-input"
						placeholder="jese.leos@gmail.com"
					/>
				</div>

				<div class="mb-4">
					<label for="password" class="form-label">password</label>
					<input disabled={!isEdit} type="password" class="form-input" placeholder="***********" />
				</div>

				{#if isEdit}
					<button disabled={!isEdit} type="submit" class="w-full btn-primary">Submit Changes</button
					>
				{/if}
			</form>
		</div>
	</div>
</section>

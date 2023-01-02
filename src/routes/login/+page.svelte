<script>
	import { currentBoardId } from '../../stores/selectedBoard';
	import Google from '../../svgs/Google.svelte';

	currentBoardId.set('');
</script>

<section
	class="transition-all sm:translate-x-[256px] lg:translate-x-[300px] lg:max-w-[calc(100vw-300px)] sm:max-w-[calc(100vw-256px)] min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)]"
>
	<form class=" flex items-center justify-center">
		<div>
			<h2 class="text-3xl text-center font-bold mb-8 uppercase text-gray-900 dark:text-white">
				Login
			</h2>
			<div class="mb-4">
				<label for="email" class="form-label ">email</label>
				<input type="email" class="form-input lg:min-w-[400px]" />
			</div>

			<div class="mb-4">
				<label for="password" class="form-label">password</label>
				<input type="password" class="form-input lg:min-w-[400px]" />
			</div>
			<a href="#!" class="text-gray-800 dark:text-gray-300 hover:text-primary2">Forgot password?</a>
			<button type="submit" class="btn-primary w-full my-4"> login </button>
			<div
				class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 dark:before:border-dark3 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 dark:after:border-dark3 after:mt-0.5"
			>
				<p class="text-gray-800 dark:text-gray-300 text-center font-semibold mx-4 mb-0">OR</p>
			</div>

			<a
				class="btn-theme text-[#DB4437] py-3  w-full flex justify-center items-center mb-3"
				href="#!"
			>
				<span class="mr-2">
					<Google />
				</span>
				Continue with Google
			</a>
		</div>
	</form>
</section>

<style lang="scss">
	form {
		min-height: inherit;
		max-height: inherit;
	}
</style>

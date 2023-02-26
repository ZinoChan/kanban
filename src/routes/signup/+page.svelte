<script lang="ts">
	import Google from '../../svgs/Google.svelte';
	import useValidate from '../../util/useValidate';
	import type { AuthFormErrors } from '../../types/Auth.types';
	import { signUpWithEmail } from '../../util/firebase';
	import { getErrorMessage } from '../../util/errorMsg';
	import LoadingOverlay from '../../components/LoadingOverlay.svelte';

	let email = '';
	let password = '';
	let fullName = '';
	let loading = false;
	let serverErr = '';
	let confirmation = '';
	let errors: AuthFormErrors = {
		email: null,
		password: null,
		fullName: null
	};

	const handleSignup = async () => {
		const { isValid, hasErrors } = useValidate(email, password, fullName);
		if (isValid) {
			try {
				loading = true;
				const { res, serverError } = await signUpWithEmail(email, password);
				loading = false;
				serverErr = serverError;
				confirmation = 'Sign up Success';
			} catch (error) {
				loading = false;
				serverErr = getErrorMessage(error);
			}
		} else {
			errors = { ...hasErrors };
		}
	};
</script>

<section
	class="transition-all sm:translate-x-[256px] lg:translate-x-[300px] lg:max-w-[calc(100vw-300px)] sm:max-w-[calc(100vw-256px)] min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)]"
>
	<LoadingOverlay isLoading={loading} />
	<form on:submit|preventDefault={handleSignup} class=" flex items-center justify-center">
		<div>
			<h2 class="text-3xl text-center font-bold mb-8 uppercase text-gray-900 dark:text-white">
				Sign Up
			</h2>
			{#if serverErr}
				<div
					class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
					role="alert"
				>
					<span class="font-medium">
						{serverErr}
					</span>
				</div>
			{/if}
			{#if confirmation}
				<div
					class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
					role="alert"
				>
					<span class="font-medium">
						{confirmation}
					</span>
				</div>
			{/if}

			<div class="mb-4">
				<label for="fullName" class="form-label">fullName</label>
				<input type="text" bind:value={fullName} class="form-input lg:min-w-[400px]" />

				{#if errors.fullName}
					<p class="error">{errors.fullName}</p>
				{/if}
			</div>
			<div class="mb-4">
				<label for="email" class="form-label">email</label>
				<input type="email" bind:value={email} class="form-input lg:min-w-[400px]" />
				{#if errors.email}
					<p class="error">{errors.email}</p>
				{/if}
			</div>

			<div class="mb-4">
				<label for="password" class="form-label">password</label>
				<input type="password" bind:value={password} class="form-input lg:min-w-[400px] " />
				{#if errors.password}
					<p class="error">{errors.password}</p>
				{/if}
			</div>
			<a href="#!" class="text-gray-800 dark:text-gray-300">Forgot password?</a>
			<button type="submit" class="btn-primary w-full my-4"> sign up </button>
			<div
				class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 dark:before:border-dark3 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 dark:after:border-dark3 after:mt-0.5"
			>
				<p class="text-gray-800 dark:text-gray-300 text-center font-semibold mx-4 mb-0">OR</p>
			</div>

			<a
				class="btn-theme py-3 text-[#DB4437]  w-full flex justify-center items-center mb-3"
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
	.error {
		color: red;
	}
</style>

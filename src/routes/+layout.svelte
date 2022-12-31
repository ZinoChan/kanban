<script lang="ts">
	import '@fontsource/montserrat';
	import '@fontsource/hind';
	import '../styles/app.scss';
	import Header from '../components/Header.svelte';
	import SideNav from '../components/SideNav.svelte';
	import TaskDetails from '../components/TaskDetails.svelte';
</script>

<main class="flex flex-col">
	<Header />
	<div class="relative flex w-full top-16">
		<SideNav />
		<div class="absolute w-full bg-light dark:bg-dark2">
			<slot />
		</div>
	</div>
</main>

<TaskDetails />

<footer>copy right</footer>

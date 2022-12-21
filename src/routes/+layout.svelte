<script>
	import '../styles/app.scss';
	import Header from '../components/Header.svelte';
	import SideNav from '../components/SideNav.svelte';
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

<footer>copy right</footer>

<script>
	import '../styles/app.scss';
	import Header from '../components/Header.svelte';
	import SideNav from '../components/SideNav.svelte';
</script>

<main class="flex flex-col">
	<Header />
	<div class="relative flex w-full top-16">
		<SideNav />
		<div
			class="absolute w-screen min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] overflow-auto transition-all sm:translate-x-[256px] lg:translate-x-[300px] max-w-[calc(100vw+256px)] bg-light dark:bg-dark2"
		>
			<slot />
		</div>
	</div>
</main>

<footer>copy right</footer>

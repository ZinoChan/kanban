<script lang="ts">
	import '@fontsource/montserrat';
	import '@fontsource/hind';
	import '../styles/app.scss';
	import Header from '../components/Header.svelte';
	import SideNav from '../components/SideNav.svelte';
	import TaskDetails from '../components/TaskDetails.svelte';
	import NewIdea from '../components/NewIdea.svelte';
	import IdeaDetails from '../components/IdeaDetails.svelte';
	import EditBoard from '../components/EditBoard.svelte';
</script>

<svelte:head>
	<title>KanBan</title>
</svelte:head>

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
<NewIdea />
<IdeaDetails />
<EditBoard />
<footer>copy right</footer>

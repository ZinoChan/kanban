<script lang="ts">
	import Spinner from '../svgs/Spinner.svelte';
	import { onMount } from 'svelte';
	import AlertTriangle from '../svgs/AlertTriangle.svelte';
	export let src: string;
	export let alt: string;

	let loaded = false;
	let failed = false;
	let loading = false;

	onMount(() => {
		const img = new Image();
		img.src = src;
		img.alt = alt;
		loading = true;

		img.onload = () => {
			loading = false;
			loaded = true;
		};
		img.onerror = () => {
			loading = false;
			failed = true;
		};
	});
</script>

{#if loaded}
	<img class="w-full h-full" {src} {alt} />
{:else if failed}
	<AlertTriangle />
{:else if loading}
	<Spinner />
{/if}

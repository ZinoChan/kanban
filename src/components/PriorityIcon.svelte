<script lang="ts">
	import Alert from '../svgs/Alert.svelte';
	import Bolt from '../svgs/Bolt.svelte';
	import Feather from '../svgs/Feather.svelte';
	import Target from '../svgs/Target.svelte';

	export let priority: String;
</script>

{#if priority === 'important'}
	<Alert />
{:else if priority === 'urgent'}
	<Bolt />
{:else if priority === 'later'}
	<Feather />
{:else}
	<Target />
{/if}

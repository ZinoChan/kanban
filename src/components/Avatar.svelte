<script>
	import Image from './Image.svelte';
	import Notification from './Notification.svelte';
	import ProfileDropDown from './ProfileDropDown.svelte';
</script>

<div class="relative flex items-center space-x-2">
	<Notification />
	<div
		class="w-10 h-10 flex items-center justify-center bg-slate-300 dark:bg-dark2 rounded-full overflow-hidden"
	>
		<Image src="/avatar.jpg" alt="avatar" />
	</div>
	<h5 class="text-sm font-bold dark:text-white">Jese Leos</h5>
	<ProfileDropDown />
</div>

<!-- Dropdown menu -->

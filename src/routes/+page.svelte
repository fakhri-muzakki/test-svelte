<script lang="ts">
	import { theme } from '$lib/theme.svelte';
	import { Sun, Moon } from 'lucide-svelte';
</script>

<div
	class="
		min-h-screen
		bg-white
		text-black

		dark:bg-zinc-900
		dark:text-white
	"
>
	<button
		class="fixed bottom-4 right-4"
		onclick={() => theme.set(theme.current === 'dark' ? 'light' : 'dark')}
	>
		{#if theme.current === 'dark'}
			<Sun />
		{:else}
			<Moon />
		{/if}
	</button>
</div>

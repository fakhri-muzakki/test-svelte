<script lang="ts">
	import LanguageToggle from '$lib/components/language-toggle.svelte';
	import { theme } from '$lib/theme.svelte';
	import { Sun, Moon } from 'lucide-svelte';
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let heading: HTMLHeadingElement;

	onMount(() => {
		gsap.from(heading, {
			y: 50,
			opacity: 0,
			duration: 1
		});
	});
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
	<h1 bind:this={heading}>Hello GSAP</h1>
	<h1>{$_('common.hello')}</h1>
	<LanguageToggle />
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

<script lang="ts">
	import { locale } from 'svelte-i18n';

	function toggleLanguage() {
		locale.set($locale === 'id' ? 'en' : 'id');
	}
</script>

<button class="rounded bg-blue-600 px-4 py-2 text-white" onclick={toggleLanguage}>
	{$locale === 'id' ? 'English' : 'Indonesia'}
</button>

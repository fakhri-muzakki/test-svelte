class ThemeState {
	current = $state<'light' | 'dark' | 'system'>('system');

	set(theme: 'light' | 'dark' | 'system') {
		this.current = theme;

		localStorage.setItem('theme', theme);

		this.apply();
	}

	apply() {
		const html = document.documentElement;

		html.classList.remove('light', 'dark');

		if (this.current === 'dark') {
			html.classList.add('dark');
			return;
		}

		if (this.current === 'light') {
			html.classList.add('light');
			return;
		}

		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		html.classList.add(prefersDark ? 'dark' : 'light');
	}

	init() {
		const saved = localStorage.getItem('theme') ?? 'system';

		this.current = saved as 'light' | 'dark' | 'system';

		this.apply();
	}
}

export const theme = new ThemeState();

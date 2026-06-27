import { addMessages, init } from 'svelte-i18n';

import en from './locales/en.json';
import id from './locales/id.json';

addMessages('en', en);
addMessages('id', id);

init({
	fallbackLocale: 'en',
	initialLocale: 'id'
});

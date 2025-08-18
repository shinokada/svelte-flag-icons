import type { MetaProps } from 'runes-meta-tags';

const title = 'Getting Started - Svelte Flag Icons v1';
const description = 'How to get started with Svelte Flag Icons v1';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-flag-icons';

export const load = () => {
	const pageMetaTags: MetaProps = {
		title,
		description,
		og: {
			title,
			description,
			image: imgUrl
		},
		twitter: {
			title,
			description,
			image: imgUrl
		}
	};
	return { pageMetaTags };
};

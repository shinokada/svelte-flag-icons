import type { MetaProps } from 'runes-meta-tags';

const title = 'Setting Global Icon - Svelte Flag Icons'
const description = 'How to create a global icon using setContext with Svelte Flag Icons'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-flag-icons'
export const load = () => {
  const pageMetaTags = Object.freeze({
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
  }) satisfies MetaProps;
  return { pageMetaTags };
};
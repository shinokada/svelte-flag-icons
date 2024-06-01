import type { MetaProps } from 'runes-meta-tags';

const title = 'Flags - Svelte Flag Icons'
const description = 'Easily Find & Copy SVG Icon name for Your Project'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-flags'
const ogUrl = 'http://localhost:4173/flags'

export const load = ({ url }) => {
  const pageMetaTags = Object.freeze({
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl,
      url: ogUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};

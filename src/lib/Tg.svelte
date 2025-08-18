<script lang="ts">
	import { getContext } from 'svelte';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};

	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		title,
		desc,
		ariaLabel = 'tg',
		...restProps
	}: Props = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{...restProps}
	{role}
	width={size}
	height={size}
	aria-label={ariaLabel}
	aria-describedby={hasDescription ? ariaDescribedby : undefined}
	viewBox="0 0 640 480"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<defs> <clipPath id="tg-a"> <path fill-opacity=".7" d="M0 0h682.7v512H0z" /> </clipPath> </defs>
	<g fill-rule="evenodd" clip-path="url(#tg-a)" transform="scale(.9375)">
		<path fill="#ffe300" d="M0 0h767.6v512H0z" />
		<path fill="#118600" d="M0 208.1h767.6V311H0zM0 .2h767.6v102.9H0z" />
		<path fill="#d80000" d="M0 .3h306.5v310.6H0z" />
		<path
			fill="#fff"
			d="M134.4 128.4c0-.8 18.9-53 18.9-53l17 52.2s57.4 1.7 57.4.8-45.3 34.3-45.3 34.3 21.4 60 20.5 58.2c-.8-1.7-49.6-36-49.6-36s-49.7 34.3-48.8 34.3c.8 0 18.8-56.5 18.8-56.5l-44.5-33.4z"
		/> <path fill="#118600" d="M0 409.2h767.6V512H0z" />
	</g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel = 'tg'
@prop ...restProps
-->

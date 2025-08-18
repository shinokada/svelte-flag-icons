<script lang="ts">
	import { getContext } from 'svelte';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};

	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		title,
		desc,
		ariaLabel = 'rw',
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
	<path fill="#20603d" d="M0 0h640v480H0z" /> <path fill="#fad201" d="M0 0h640v360H0z" />
	<path fill="#00a1de" d="M0 0h640v240H0z" />
	<g transform="translate(511 125.4)scale(.66667)">
		<g id="rw-b">
			<path
				id="rw-a"
				fill="#e5be01"
				d="M116.1 0 35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z"
			/> <use xlink:href="#rw-a" width="100%" height="100%" transform="scale(1 -1)" />
		</g> <use xlink:href="#rw-b" width="100%" height="100%" transform="scale(-1 1)" />
		<circle r="34.3" fill="#e5be01" stroke="#00a1de" stroke-width="3.4" />
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
@prop ariaLabel = 'rw'
@prop ...restProps
-->

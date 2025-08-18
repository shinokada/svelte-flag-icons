<script lang="ts">
	import { getContext } from 'svelte';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};

	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		title,
		desc,
		ariaLabel = 'pr',
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
	<defs>
		<clipPath id="pr-a"> <path fill-opacity=".7" d="M-37.3 0h682.7v512H-37.3z" /> </clipPath>
	</defs>
	<g fill-rule="evenodd" clip-path="url(#pr-a)" transform="translate(35)scale(.9375)">
		<path fill="#ed0000" d="M-37.3 0h768v512h-768z" />
		<path fill="#fff" d="M-37.3 102.4h768v102.4h-768zm0 204.8h768v102.4h-768z" />
		<path fill="#0050f0" d="m-37.3 0 440.7 255.7L-37.3 511z" />
		<path
			fill="#fff"
			d="M156.4 325.5 109 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3z"
		/>
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
@prop ariaLabel = 'pr'
@prop ...restProps
-->

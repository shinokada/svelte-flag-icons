<script lang="ts">
	import { getContext } from 'svelte';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};

	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		title,
		desc,
		focusable = 'false',
		ariaLabel,
		...restProps
	}: Props = $props();

	let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{...restProps}
	{role}
	width={size}
	height={size}
	{focusable}
	aria-label={title?.id ? undefined : ariaLabel}
	aria-labelledby={title?.id || undefined}
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
		<clipPath id="jo-a"> <path fill-opacity=".7" d="M-117.8 0h682.6v512h-682.6z" /> </clipPath>
	</defs>
	<g clip-path="url(#jo-a)" transform="translate(110.5)scale(.9375)">
		<g fill-rule="evenodd" stroke-width="1pt">
			<path fill="#000001" d="M-117.8 0h1024v170.7h-1024z" />
			<path fill="#fff" d="M-117.8 170.7h1024v170.6h-1024z" />
			<path fill="#090" d="M-117.8 341.3h1024V512h-1024z" />
			<path fill="red" d="m-117.8 512 512-256-512-256z" />
			<path
				fill="#fff"
				d="m24.5 289 5.7-24.9H4.7l23-11-15.9-19.9 23 11 5.6-24.8 5.7 24.9L69 233.2l-16 19.9 23 11H50.6l5.7 24.9-15.9-20z"
			/>
		</g>
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->

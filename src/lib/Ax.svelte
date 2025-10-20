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
		<clipPath id="ax-a"> <path fill-opacity=".7" d="M106.3 0h1133.3v850H106.3z" /> </clipPath>
	</defs>
	<g clip-path="url(#ax-a)" transform="matrix(.56472 0 0 .56482 -60 -.1)">
		<path fill="#0053a5" d="M0 0h1300v850H0z" />
		<g fill="#ffce00"> <path d="M400 0h250v850H400z" /> <path d="M0 300h1300v250H0z" /> </g>
		<g fill="#d21034"> <path d="M475 0h100v850H475z" /> <path d="M0 375h1300v100H0z" /> </g>
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

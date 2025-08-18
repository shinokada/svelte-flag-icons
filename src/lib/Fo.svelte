<script lang="ts">
	import { getContext } from 'svelte';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};

	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		title,
		desc,
		ariaLabel = 'fo',
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
		<clipPath id="fo-a"> <path fill-opacity=".7" d="M-78 32h640v480H-78z" /> </clipPath>
	</defs>
	<g fill-rule="evenodd" stroke-width="0" clip-path="url(#fo-a)" transform="translate(78 -32)">
		<path fill="#fff" d="M-78 32h663.9v480H-78z" />
		<path fill="#003897" d="M-76 218.7h185.9V32H216v186.7h371.8v106.6H216V512H109.9V325.3h-186z" />
		<path fill="#d72828" d="M-76 245.3h212.4V32h53.1v213.3H588v53.4H189.5V512h-53V298.7H-76z" />
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
@prop ariaLabel = 'fo'
@prop ...restProps
-->

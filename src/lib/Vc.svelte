<script lang="ts">
	import { getContext } from 'svelte';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};

	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		title,
		desc,
		ariaLabel = 'vc',
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
	<g fill-rule="evenodd">
		<path fill="#f4f100" d="M0 0h640v480H0z" /> <path fill="#199a00" d="M490 0h150v480H490z" />
		<path fill="#0058aa" d="M0 0h150v480H0z" />
		<path
			fill="#199a00"
			d="m259.3 130-46.4 71.3 44.7 74.4 43.8-73.7zm121.2 0-46.3 71.3 44.7 74.4 43.8-73.7zm-61.2 97.3-46.4 71.4 44.8 74.4 43.8-73.7-42.2-72z"
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
@prop ariaLabel = 'vc'
@prop ...restProps
-->

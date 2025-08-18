<script lang="ts">
	import { getContext } from 'svelte';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};

	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		title,
		desc,
		ariaLabel = 'my',
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
	<g clip-path="url(#my-a)">
		<path fill="#C00" d="M0 0h640v480H0z" /> <path fill="#C00" d="M0 0h640v34.3H0z" />
		<path fill="#fff" d="M0 34.3h640v34.3H0z" /> <path fill="#C00" d="M0 68.6h640v34.3H0z" />
		<path fill="#fff" d="M0 102.9h640V137H0z" /> <path fill="#C00" d="M0 137.1h640v34.3H0z" />
		<path fill="#fff" d="M0 171.4h640v34.3H0z" /> <path fill="#C00" d="M0 205.7h640V240H0z" />
		<path fill="#fff" d="M0 240h640v34.3H0z" /> <path fill="#C00" d="M0 274.3h640v34.3H0z" />
		<path fill="#fff" d="M0 308.6h640v34.3H0z" /> <path fill="#C00" d="M0 342.9h640V377H0z" />
		<path fill="#fff" d="M0 377.1h640v34.3H0z" /> <path fill="#C00" d="M0 411.4h640v34.3H0z" />
		<path fill="#fff" d="M0 445.7h640V480H0z" /> <path fill="#006" d="M0 .5h320v274.3H0z" />
		<path
			fill="#FC0"
			d="m207.5 73.8 6 40.7 23-34-12.4 39.2 35.5-20.8-28.1 30 41-3.2-38.3 14.8 38.3 14.8-41-3.2 28.1 30-35.5-20.8 12.3 39.3-23-34.1-6 40.7-5.9-40.7-23 34 12.4-39.2-35.5 20.8 28-30-41 3.2 38.4-14.8-38.3-14.8 41 3.2-28.1-30 35.5 20.8-12.4-39.3 23 34.1zm-33.3 1.7a71.1 71.1 0 0 0-100 65 71.1 71.1 0 0 0 100 65 80 80 0 0 1-83.2 6.2 80 80 0 0 1-43.4-71.2 80 80 0 0 1 126.6-65"
		/>
	</g> <defs> <clipPath id="my-a"> <path fill="#fff" d="M0 0h640v480H0z" /> </clipPath> </defs>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel = 'my'
@prop ...restProps
-->

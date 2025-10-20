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
	<path fill="#12ad2b" d="M0 0h640v480H0z" /> <path fill="#ffce00" d="M0 137.1h640V343H0z" />
	<path fill="#d21034" d="M0 0v480l240-240" />
	<g id="st-c" transform="translate(351.6 240)scale(.34286)">
		<g id="st-b">
			<path id="st-a" fill="#000001" d="M0-200V0h100" transform="rotate(18 0 -200)" />
			<use xlink:href="#st-a" width="100%" height="100%" transform="scale(-1 1)" />
		</g> <use xlink:href="#st-b" width="100%" height="100%" transform="rotate(72)" />
		<use xlink:href="#st-b" width="100%" height="100%" transform="rotate(144)" />
		<use xlink:href="#st-b" width="100%" height="100%" transform="rotate(-144)" />
		<use xlink:href="#st-b" width="100%" height="100%" transform="rotate(-72)" />
	</g> <use xlink:href="#st-c" width="100%" height="100%" x="700" transform="translate(-523.2)" />
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

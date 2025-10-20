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
	<path fill="#0d5eaf" fill-rule="evenodd" d="M0 0h640v53.3H0z" />
	<path fill="#fff" fill-rule="evenodd" d="M0 53.3h640v53.4H0z" />
	<path fill="#0d5eaf" fill-rule="evenodd" d="M0 106.7h640V160H0z" />
	<path fill="#fff" fill-rule="evenodd" d="M0 160h640v53.3H0z" />
	<path fill="#0d5eaf" d="M0 0h266.7v266.7H0z" />
	<path fill="#0d5eaf" fill-rule="evenodd" d="M0 213.3h640v53.4H0z" />
	<path fill="#fff" fill-rule="evenodd" d="M0 266.7h640V320H0z" />
	<path fill="#0d5eaf" fill-rule="evenodd" d="M0 320h640v53.3H0z" />
	<path fill="#fff" fill-rule="evenodd" d="M0 373.3h640v53.4H0z" />
	<g fill="#fff" fill-rule="evenodd" stroke-width="1.3">
		<path d="M106.7 0H160v266.7h-53.3z" /> <path d="M0 106.7h266.7V160H0z" />
	</g> <path fill="#0d5eaf" d="M0 426.7h640V480H0z" />
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

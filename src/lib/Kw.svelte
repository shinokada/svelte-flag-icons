<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'kw',
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
  <defs> <clipPath id="kw-a"> <path fill-opacity=".7" d="M0 0h682.7v512H0z" /> </clipPath> </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#kw-a)" transform="scale(.9375)">
    <path fill="#fff" d="M0 170.6h1024v170.7H0z" /> <path fill="#f31830" d="M0 341.3h1024V512H0z" />
    <path fill="#00d941" d="M0 0h1024v170.7H0z" />
    <path fill="#000001" d="M0 0v512l255.4-170.7.6-170.8z" />
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
@prop ariaLabel = 'kw'
@prop ...restProps
-->

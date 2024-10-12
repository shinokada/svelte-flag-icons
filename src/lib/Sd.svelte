<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'sd',
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
  <defs> <clipPath id="sd-a"> <path fill-opacity=".7" d="M0 0h682.7v512H0z" /> </clipPath> </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#sd-a)" transform="scale(.9375)">
    <path fill="#000001" d="M0 341.3h1024V512H0z" /> <path fill="#fff" d="M0 170.6h1024v170.7H0z" />
    <path fill="red" d="M0 0h1024.8v170.7H0z" /> <path fill="#009a00" d="M0 0v512l341.3-256z" />
  </g>
</svg>

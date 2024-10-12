<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'ag',
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
    <clipPath id="ag-a"> <path fill-opacity=".7" d="M-79.7 0H603v512H-79.7z" /> </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#ag-a)" transform="translate(74.7)scale(.9375)">
    <path fill="#fff" d="M-79.7 0H603v512H-79.7z" />
    <path fill="#000001" d="M-79.6 0H603v204.8H-79.7z" />
    <path fill="#0072c6" d="M21.3 203.2h480v112h-480z" />
    <path fill="#ce1126" d="M603 .1V512H261.6L603 0zM-79.7.1V512h341.3L-79.7 0z" />
    <path
      fill="#fcd116"
      d="M440.4 203.3 364 184l64.9-49-79.7 11.4 41-69.5-70.7 41L332.3 37l-47.9 63.8-19.3-74-21.7 76.3-47.8-65 13.7 83.2L138.5 78l41 69.5-77.4-12.5 63.8 47.8L86 203.3z"
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
@prop ariaLabel = 'ag'
@prop ...restProps
-->

<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'cf',
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
    <clipPath id="cf-a"> <path fill-opacity=".7" d="M-12.4 32h640v480h-640z" /> </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#cf-a)" transform="translate(12.4 -32)">
    <path fill="#00f" d="M-52 32h719.3v119H-52z" />
    <path fill="#ff0" d="M-52 391.6h719.3V512H-52z" />
    <path fill="#009a00" d="M-52 271.3h719.3v120.3H-52z" />
    <path fill="#fff" d="M-52 151h719.3v120.3H-52z" />
    <path fill="red" d="M247.7 32.5h119.9V512H247.7z" />
    <path
      fill="#ff0"
      d="m99.3 137.7-31.5-21.8-31.3 22L47.4 101 16.9 78l38.2-1 12.5-36.3L80.3 77l38.1.7L88.2 101"
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
@prop ariaLabel = 'cf'
@prop ...restProps
-->

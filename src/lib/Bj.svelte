<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'bj',
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
  <defs> <clipPath id="bj-a"> <path fill="gray" d="M67.6-154h666v666h-666z" /> </clipPath> </defs>
  <g clip-path="url(#bj-a)" transform="matrix(.961 0 0 .7207 -65 111)">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#319400" d="M0-154h333v666H0z" />
      <path fill="#ffd600" d="M333-154h666v333H333z" />
      <path fill="#de2110" d="M333 179h666v333H333z" />
    </g>
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
@prop ariaLabel = 'bj'
@prop ...restProps
-->

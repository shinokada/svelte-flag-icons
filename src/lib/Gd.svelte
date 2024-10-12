<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'gd',
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
    <g id="gd-c">
      <g id="gd-b">
        <path id="gd-a" fill="#fcd116" d="M0-1v1h.5" transform="rotate(18 0 -1)" />
        <use xlink:href="#gd-a" transform="scale(-1 1)" />
      </g> <use xlink:href="#gd-b" transform="rotate(72)" />
      <use xlink:href="#gd-b" transform="rotate(144)" />
      <use xlink:href="#gd-b" transform="rotate(216)" />
      <use xlink:href="#gd-b" transform="rotate(288)" />
    </g>
  </defs> <path fill="#ce1126" d="M0 0h640v480H0z" />
  <path fill="#007a5e" d="M67.2 67.2h505.6v345.6H67.2z" />
  <path fill="#fcd116" d="M67.2 67.3h505.6L67.2 412.9h505.6z" />
  <circle cx="319.9" cy="240.1" r="57.6" fill="#ce1126" />
  <use xlink:href="#gd-c" width="100%" height="100%" transform="translate(320 240)scale(52.8)" />
  <use xlink:href="#gd-d" width="100%" height="100%" x="-100" transform="translate(-30.3)" />
  <use
    xlink:href="#gd-c"
    id="gd-d"
    width="100%"
    height="100%"
    transform="translate(320 33.6)scale(31.2)"
  /> <use xlink:href="#gd-d" width="100%" height="100%" x="100" transform="translate(30.3)" />
  <path fill="#ce1126" d="M102.3 240.7a80.4 80.4 0 0 0 33.5 33.2 111 111 0 0 0-11.3-45z" />
  <path
    fill="#fcd116"
    d="M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63.2 63.2 0 0 1-10.9-41.9 70 70 0 0 1 32.5 30.8c16.4-59.5-42-55.8-57.1-74.8"
  />
  <use xlink:href="#gd-d" width="100%" height="100%" x="-100" transform="translate(-30.3 414.6)" />
  <use xlink:href="#gd-c" width="100%" height="100%" transform="translate(320 448.2)scale(31.2)" />
  <use xlink:href="#gd-d" width="100%" height="100%" x="100" transform="translate(30.3 414.6)" />
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel = 'gd'
@prop ...restProps
-->

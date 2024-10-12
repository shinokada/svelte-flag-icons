<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'mm',
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
  <path fill="#fecb00" d="M0 0h640v480H0z" /> <path fill="#34b233" d="M0 160h640v320H0z" />
  <path fill="#ea2839" d="M0 320h640v160H0z" />
  <g transform="translate(320 256.9)scale(176.87999)">
    <path id="mm-a" fill="#fff" d="m0-1 .3 1h-.6z" />
    <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(-144)" />
    <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(-72)" />
    <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(72)" />
    <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(144)" />
  </g>
</svg>

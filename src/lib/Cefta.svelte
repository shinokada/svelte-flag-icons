<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'cefta',
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
  <path fill="#039" d="M0 0h640v480H0z" />
  <circle cx="320" cy="249.8" r="30.4" fill="none" stroke="#fc0" stroke-width="27.5" />
  <circle cx="320" cy="249.8" r="88.3" fill="none" stroke="#fc0" stroke-width="27.5" />
  <path fill="#039" d="m404.7 165.1 84.7 84.7-84.7 84.7-84.7-84.7z" />
  <path
    fill="#fc0"
    d="M175.7 236.1h59.2v27.5h-59.2zm259.1 0h88.3v27.5h-88.3zM363 187.4l38.8-38.8 19.4 19.5-38.7 38.7zM306.3 48.6h27.5v107.1h-27.5z"
  /> <circle cx="225.1" cy="159.6" r="13.7" fill="#fc0" />
  <circle cx="144.3" cy="249.8" r="13.7" fill="#fc0" />
  <circle cx="320" cy="381.4" r="13.7" fill="#fc0" />
  <circle cx="320" cy="425.5" r="13.7" fill="#fc0" />
  <circle cx="408.3" cy="249.8" r="13.7" fill="#fc0" />
  <path
    fill="#fc0"
    d="m208.3 341.5 19.5-19.4 19.4 19.4-19.4 19.5zm204.7 21 19.5-19.5 19.5 19.5-19.5 19.4z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel = 'cefta'
@prop ...restProps
-->

<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'bb',
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
  <path fill="#00267f" d="M0 0h640v480H0z" /> <path fill="#ffc726" d="M213.3 0h213.4v480H213.3z" />
  <path
    id="bb-a"
    fill="#000001"
    d="M319.8 135.5c-7 19-14 38.6-29.2 53.7 4.7-1.6 13-3 18.2-2.8v79.5l-22.4 3.3c-.8 0-1-1.3-1-3-2.2-24.7-8-45.5-14.8-67-.5-2.9-9-14-2.4-12 .8 0 9.5 3.6 8.2 1.9a85 85 0 0 0-46.4-24c-1.5-.3-2.4.5-1 2.2 22.4 34.6 41.3 75.5 41.1 124 8.8 0 30-5.2 38.7-5.2v56.1H320l2.5-156.7z"
  /> <use xlink:href="#bb-a" width="100%" height="100%" transform="matrix(-1 0 0 1 639.5 0)" />
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel = 'bb'
@prop ...restProps
-->

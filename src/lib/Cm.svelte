<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'cm',
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
  <path fill="#007a5e" d="M0 0h213.3v480H0z" />
  <path fill="#ce1126" d="M213.3 0h213.4v480H213.3z" />
  <path fill="#fcd116" d="M426.7 0H640v480H426.7z" />
  <g fill="#fcd116" transform="translate(320 240)scale(7.1111)">
    <g id="cm-b">
      <path id="cm-a" d="M0-8-2.5-.4 1.3.9z" />
      <use xlink:href="#cm-a" width="100%" height="100%" transform="scale(-1 1)" />
    </g> <use xlink:href="#cm-b" width="100%" height="100%" transform="rotate(72)" />
    <use xlink:href="#cm-b" width="100%" height="100%" transform="rotate(144)" />
    <use xlink:href="#cm-b" width="100%" height="100%" transform="rotate(-144)" />
    <use xlink:href="#cm-b" width="100%" height="100%" transform="rotate(-72)" />
  </g>
</svg>

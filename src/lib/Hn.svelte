<script lang='ts'>
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types'
  
  const ctx: BaseProps = getContext('iconCtx') ?? {};
  
  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img', 
    title, 
    desc,
    focusable = 'false',
    ariaLabel, 
    ...restProps 
  }: Props = $props();

  const ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 640 480"
>
  {#if title?.id && title.title}
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
       <path fill="#18c3df" d="M0 0h640v480H0z"/>   <path fill="#fff" d="M0 160h640v160H0z"/>   <g id="hn-c" fill="#18c3df" transform="translate(320 240)scale(26.66665)">     <g id="hn-b">       <path id="hn-a" d="m-.3 0 .5.1L0-1z"/>       <use xlink:href="#hn-a" width="100%" height="100%" transform="scale(-1 1)"/>     </g>     <use xlink:href="#hn-b" width="100%" height="100%" transform="rotate(72)"/>     <use xlink:href="#hn-b" width="100%" height="100%" transform="rotate(-72)"/>     <use xlink:href="#hn-b" width="100%" height="100%" transform="rotate(144)"/>     <use xlink:href="#hn-b" width="100%" height="100%" transform="rotate(-144)"/>   </g>   <use xlink:href="#hn-c" width="100%" height="100%" transform="translate(133.3 -42.7)"/>   <use xlink:href="#hn-c" width="100%" height="100%" transform="translate(133.3 37.3)"/>   <use xlink:href="#hn-c" width="100%" height="100%" transform="translate(-133.3 -42.7)"/>   <use xlink:href="#hn-c" width="100%" height="100%" transform="translate(-133.3 37.3)"/>  
</svg>


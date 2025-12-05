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
       <path fill="#e70013" d="M0 0h640v480H0z"/>   <path fill="#fff" d="M320 119.2a1 1 0 0 0-1 240.3 1 1 0 0 0 1-240.3M392 293a90 90 0 1 1 0-107 72 72 0 1 0 0 107m-4.7-21.7-37.4-12.1-23.1 31.8v-39.3l-37.4-12.2 37.4-12.2V188l23.1 31.8 37.4-12.1-23.1 31.8z"/>  
</svg>


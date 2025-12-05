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
       <path fill="#007fff" d="M0 0h640v480H0z"/>   <path fill="#f7d618" d="M28.8 96H96l20.8-67.2L137.6 96h67.2l-54.4 41.6 20.8 67.2-54.4-41.6-54.4 41.6 20.8-67.2zM600 0 0 360v120h40l600-360V0z"/>   <path fill="#ce1021" d="M640 0 0 384v96L640 96z"/>  
</svg>


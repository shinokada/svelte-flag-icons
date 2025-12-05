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
       <defs>     <clipPath id="gm-a">       <path fill-opacity=".7" d="M0-48h640v480H0z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#gm-a)" transform="translate(0 48)">     <path fill="red" d="M0-128h640V85.3H0z"/>     <path fill="#fff" d="M0 85.3h640V121H0z"/>     <path fill="#009" d="M0 120.9h640V263H0z"/>     <path fill="#fff" d="M0 263.1h640v35.6H0z"/>     <path fill="#090" d="M0 298.7h640V512H0z"/>   </g>  
</svg>


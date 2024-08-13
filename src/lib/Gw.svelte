<script lang='ts'>
  import { getContext } from 'svelte';
  import type { SVGAttributes } from 'svelte/elements';

  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps extends SVGAttributes<SVGElement> {
    size?: string;
    role?: string;
  }
  interface CtxType extends BaseProps {}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps{
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }

  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img', 
    title, 
    desc, 
    ariaLabel =  "gw" , 
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
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
       <path fill="#ce1126" d="M0 0h220v480H0z"/>   <path fill="#fcd116" d="M220 0h420v240H220z"/>   <path fill="#009e49" d="M220 240h420v240H220z"/>   <g id="gw-b" transform="matrix(80 0 0 80 110 240)">     <path id="gw-a" fill="#000001" d="M0-1v1h.5" transform="rotate(18 0 -1)"/>     <use xlink:href="#gw-a" width="100%" height="100%" transform="scale(-1 1)"/>   </g>   <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(72 110 240)"/>   <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(144 110 240)"/>   <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(-144 110 240)"/>   <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(-72 110 240)"/>  
</svg>


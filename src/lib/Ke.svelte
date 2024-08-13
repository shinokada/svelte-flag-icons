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
    ariaLabel =  "ke" , 
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
       <defs>     <path id="ke-a" stroke-miterlimit="10" d="m-28.6 47.5 1.8 1 46.7-81c2.7-.6 4.2-3.2 5.7-5.8 1-1.8 5-8.7 6.7-17.7a58 58 0 0 0-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"/>   </defs>   <path fill="#fff" d="M0 0h640v480H0z"/>   <path fill="#000001" d="M0 0h640v144H0z"/>   <path fill="#060" d="M0 336h640v144H0z"/>   <g id="ke-b" transform="matrix(3 0 0 3 320 240)">     <use xlink:href="#ke-a" width="100%" height="100%" stroke="#000"/>     <use xlink:href="#ke-a" width="100%" height="100%" fill="#fff"/>   </g>   <use xlink:href="#ke-b" width="100%" height="100%" transform="matrix(-1 0 0 1 640 0)"/>   <path fill="#b00" d="M640.5 168H377c-9-24-39-72-57-72s-48 48-57 72H-.2v144H263c9 24 39 72 57 72s48-48 57-72h263.5z"/>   <path id="ke-c" d="M377 312c9-24 15-48 15-72s-6-48-15-72c-9 24-15 48-15 72s6 48 15 72"/>   <use xlink:href="#ke-c" width="100%" height="100%" transform="matrix(-1 0 0 1 640 0)"/>   <g fill="#fff" transform="matrix(3 0 0 3 320 240)">     <ellipse rx="4" ry="6"/>     <path id="ke-d" d="M1 5.8s4 8 4 21-4 21-4 21z"/>     <use xlink:href="#ke-d" width="100%" height="100%" transform="scale(-1)"/>     <use xlink:href="#ke-d" width="100%" height="100%" transform="scale(-1 1)"/>     <use xlink:href="#ke-d" width="100%" height="100%" transform="scale(1 -1)"/>   </g>  
</svg>


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
    ariaLabel =  "eu" , 
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
       <defs>     <g id="eu-d">       <g id="eu-b">         <path id="eu-a" d="m0-1-.3 1 .5.1z"/>         <use xlink:href="#eu-a" transform="scale(-1 1)"/>       </g>       <g id="eu-c">         <use xlink:href="#eu-b" transform="rotate(72)"/>         <use xlink:href="#eu-b" transform="rotate(144)"/>       </g>       <use xlink:href="#eu-c" transform="scale(-1 1)"/>     </g>   </defs>   <path fill="#039" d="M0 0h640v480H0z"/>   <g fill="#fc0" transform="translate(320 242.3)scale(23.7037)">     <use xlink:href="#eu-d" width="100%" height="100%" y="-6"/>     <use xlink:href="#eu-d" width="100%" height="100%" y="6"/>     <g id="eu-e">       <use xlink:href="#eu-d" width="100%" height="100%" x="-6"/>       <use xlink:href="#eu-d" width="100%" height="100%" transform="rotate(-144 -2.3 -2.1)"/>       <use xlink:href="#eu-d" width="100%" height="100%" transform="rotate(144 -2.1 -2.3)"/>       <use xlink:href="#eu-d" width="100%" height="100%" transform="rotate(72 -4.7 -2)"/>       <use xlink:href="#eu-d" width="100%" height="100%" transform="rotate(72 -5 .5)"/>     </g>     <use xlink:href="#eu-e" width="100%" height="100%" transform="scale(-1 1)"/>   </g>  
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel =  "eu"
@prop ...restProps
-->

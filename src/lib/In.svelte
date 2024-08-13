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
    ariaLabel =  "in" , 
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
       <path fill="#f93" d="M0 0h640v160H0z"/>   <path fill="#fff" d="M0 160h640v160H0z"/>   <path fill="#128807" d="M0 320h640v160H0z"/>   <g transform="matrix(3.2 0 0 3.2 320 240)">     <circle r="20" fill="#008"/>     <circle r="17.5" fill="#fff"/>     <circle r="3.5" fill="#008"/>     <g id="in-d">       <g id="in-c">         <g id="in-b">           <g id="in-a" fill="#008">             <circle r=".9" transform="rotate(7.5 -8.8 133.5)"/>             <path d="M0 17.5.6 7 0 2l-.6 5z"/>           </g>           <use xlink:href="#in-a" width="100%" height="100%" transform="rotate(15)"/>         </g>         <use xlink:href="#in-b" width="100%" height="100%" transform="rotate(30)"/>       </g>       <use xlink:href="#in-c" width="100%" height="100%" transform="rotate(60)"/>     </g>     <use xlink:href="#in-d" width="100%" height="100%" transform="rotate(120)"/>     <use xlink:href="#in-d" width="100%" height="100%" transform="rotate(-120)"/>   </g>  
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel =  "in"
@prop ...restProps
-->

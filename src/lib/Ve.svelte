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
    ariaLabel =  "ve" , 
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
       <defs>     <g id="ve-d" transform="translate(0 -36)">       <g id="ve-c">         <g id="ve-b">           <path id="ve-a" fill="#fff" d="M0-5-1.5-.2l2.8.9z"/>           <use xlink:href="#ve-a" width="180" height="120" transform="scale(-1 1)"/>         </g>         <use xlink:href="#ve-b" width="180" height="120" transform="rotate(72)"/>       </g>       <use xlink:href="#ve-b" width="180" height="120" transform="rotate(-72)"/>       <use xlink:href="#ve-c" width="180" height="120" transform="rotate(144)"/>     </g>   </defs>   <path fill="#cf142b" d="M0 0h640v480H0z"/>   <path fill="#00247d" d="M0 0h640v320H0z"/>   <path fill="#fc0" d="M0 0h640v160H0z"/>   <g id="ve-f" transform="matrix(4 0 0 4 320 336)">     <g id="ve-e">       <use xlink:href="#ve-d" width="180" height="120" transform="rotate(10)"/>       <use xlink:href="#ve-d" width="180" height="120" transform="rotate(30)"/>     </g>     <use xlink:href="#ve-e" width="180" height="120" transform="rotate(40)"/>   </g>   <use xlink:href="#ve-f" width="180" height="120" transform="rotate(-80 320 336)"/>  
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel =  "ve"
@prop ...restProps
-->

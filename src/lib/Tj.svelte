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
    ariaLabel =  "tj" , 
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
       <path fill="#060" d="M0 0h640v480H0z"/>   <path fill="#fff" d="M0 0h640v342.9H0z"/>   <path fill="#c00" d="M0 0h640v137.1H0z"/>   <path fill="#f8c300" d="M300.8 233.6a8.6 8.6 0 0 1 16 4V272h6.4v-34.3a8.6 8.6 0 0 1 16-4 20.2 20.2 0 1 0-38.4 0"/>   <path fill="#fff" d="M305.4 224.7a13.7 13.7 0 0 1 14.6 6.5 13.7 13.7 0 0 1 14.6-6.5 14.7 14.7 0 0 0-29.2 0"/>   <path id="tj-a" fill="#f8c300" d="M316.8 258.3a26 26 0 0 1-43.8 16.6 27 27 0 0 1-41 12c2.5 25 40 19.9 42.8-4.4 11.7 20.7 37.6 14.7 45.2-10.6z"/>   <use xlink:href="#tj-a" width="100%" height="100%" fill="#f8c300" transform="matrix(-1 0 0 1 640 0)"/>   <path id="tj-b" fill="#f8c300" d="M291.8 302.6c-5.3 11.3-15.7 13.2-24.8 4.1 0 0 3.6-2.6 7.6-3.3-.8-3.1.7-7.5 2.9-9.8a15 15 0 0 1 6.1 8.1c5.5-.7 8.2 1 8.2 1z"/>   <use xlink:href="#tj-b" width="100%" height="100%" fill="#f8c300" transform="rotate(9.4 320 551.3)"/>   <use xlink:href="#tj-b" width="100%" height="100%" fill="#f8c300" transform="rotate(18.7 320 551.3)"/>   <path fill="none" stroke="#f8c300" stroke-width="11" d="M253.5 327.8a233.1 233.1 0 0 1 133 0"/>   <g fill="#f8c300" transform="translate(320 164.6)scale(.68571)">     <path id="tj-c" d="m301930 415571-790463-574305h977066l-790463 574305L0-513674z" transform="scale(.00005)"/>   </g>   <g id="tj-d" fill="#f8c300" transform="translate(320 260.6)scale(.68571)">     <use xlink:href="#tj-c" width="100%" height="100%" transform="translate(-70 -121.2)"/>     <use xlink:href="#tj-c" width="100%" height="100%" transform="translate(-121.2 -70)"/>     <use xlink:href="#tj-c" width="100%" height="100%" transform="translate(-140)"/>   </g>   <use xlink:href="#tj-d" width="100%" height="100%" fill="#f8c300" transform="matrix(-1 0 0 1 640 0)"/>  
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel =  "tj"
@prop ...restProps
-->

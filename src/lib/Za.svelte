<script lang='ts'>
  import { getContext } from 'svelte';
  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps {
    size?: string;
    role?: string;
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
    class?: string;
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
    withEvents = ctx.withEvents || false, 
    title, 
    desc, 
    class: classname, 
    ariaLabel =  "za" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 640 480"
    onclick={onclick}
    onkeydown={onkeydown}
    onkeyup={onkeyup}
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
         <defs>     <clipPath id="za-a">       <path fill-opacity=".7" d="M-71.9 0h682.7v512H-71.9z"/>     </clipPath>   </defs>   <g clip-path="url(#za-a)" transform="translate(67.4)scale(.93748)">     <g fill-rule="evenodd" stroke-width="1pt">       <path fill="#000001" d="M-71.9 407.8V104.4L154 256.1z"/>       <path fill="#000c8a" d="m82.2 512.1 253.6-170.6H696V512H82.2z"/>       <path fill="#e1392d" d="M66 0h630v170.8H335.7S69.3-1.7 66 0"/>       <path fill="#ffb915" d="M-71.9 64v40.4L154 256-72 407.8v40.3l284.5-192z"/>       <path fill="#007847" d="M-71.9 64V0h95l301.2 204h371.8v104.2H324.3L23 512h-94.9v-63.9l284.4-192L-71.8 64z"/>       <path fill="#fff" d="M23 0h59.2l253.6 170.7H696V204H324.3zm0 512.1h59.2l253.6-170.6H696v-33.2H324.3L23 512z"/>     </g>   </g>  
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
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
         <defs>     <clipPath id="za-a">       <path fill-opacity=".7" d="M-71.9 0h682.7v512H-71.9z"/>     </clipPath>   </defs>   <g clip-path="url(#za-a)" transform="translate(67.4)scale(.93748)">     <g fill-rule="evenodd" stroke-width="1pt">       <path fill="#000001" d="M-71.9 407.8V104.4L154 256.1z"/>       <path fill="#000c8a" d="m82.2 512.1 253.6-170.6H696V512H82.2z"/>       <path fill="#e1392d" d="M66 0h630v170.8H335.7S69.3-1.7 66 0"/>       <path fill="#ffb915" d="M-71.9 64v40.4L154 256-72 407.8v40.3l284.5-192z"/>       <path fill="#007847" d="M-71.9 64V0h95l301.2 204h371.8v104.2H324.3L23 512h-94.9v-63.9l284.4-192L-71.8 64z"/>       <path fill="#fff" d="M23 0h59.2l253.6 170.7H696V204H324.3zm0 512.1h59.2l253.6-170.6H696v-33.2H324.3L23 512z"/>     </g>   </g>  
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop class: classname
@prop ariaLabel =  "za"
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->

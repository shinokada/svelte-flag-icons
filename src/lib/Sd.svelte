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
    ariaLabel =  "sd" , 
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
         <defs>     <clipPath id="sd-a">       <path fill-opacity=".7" d="M0 0h682.7v512H0z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#sd-a)" transform="scale(.9375)">     <path fill="#000001" d="M0 341.3h1024V512H0z"/>     <path fill="#fff" d="M0 170.6h1024v170.7H0z"/>     <path fill="red" d="M0 0h1024.8v170.7H0z"/>     <path fill="#009a00" d="M0 0v512l341.3-256z"/>   </g>  
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
         <defs>     <clipPath id="sd-a">       <path fill-opacity=".7" d="M0 0h682.7v512H0z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#sd-a)" transform="scale(.9375)">     <path fill="#000001" d="M0 341.3h1024V512H0z"/>     <path fill="#fff" d="M0 170.6h1024v170.7H0z"/>     <path fill="red" d="M0 0h1024.8v170.7H0z"/>     <path fill="#009a00" d="M0 0v512l341.3-256z"/>   </g>  
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
@prop ariaLabel =  "sd"
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->

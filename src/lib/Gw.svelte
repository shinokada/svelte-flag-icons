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
    ariaLabel =  "gw" , 
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
         <path fill="#ce1126" d="M0 0h220v480H0z"/>   <path fill="#fcd116" d="M220 0h420v240H220z"/>   <path fill="#009e49" d="M220 240h420v240H220z"/>   <g id="gw-b" transform="matrix(80 0 0 80 110 240)">     <path id="gw-a" fill="#000001" d="M0-1v1h.5" transform="rotate(18 0 -1)"/>     <use xlink:href="#gw-a" width="100%" height="100%" transform="scale(-1 1)"/>   </g>   <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(72 110 240)"/>   <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(144 110 240)"/>   <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(-144 110 240)"/>   <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(-72 110 240)"/>  
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
         <path fill="#ce1126" d="M0 0h220v480H0z"/>   <path fill="#fcd116" d="M220 0h420v240H220z"/>   <path fill="#009e49" d="M220 240h420v240H220z"/>   <g id="gw-b" transform="matrix(80 0 0 80 110 240)">     <path id="gw-a" fill="#000001" d="M0-1v1h.5" transform="rotate(18 0 -1)"/>     <use xlink:href="#gw-a" width="100%" height="100%" transform="scale(-1 1)"/>   </g>   <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(72 110 240)"/>   <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(144 110 240)"/>   <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(-144 110 240)"/>   <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(-72 110 240)"/>  
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
@prop ariaLabel =  "gw"
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->

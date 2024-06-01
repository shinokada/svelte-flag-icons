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
    ariaLabel =  "mm" , 
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
         <path fill="#fecb00" d="M0 0h640v480H0z"/>   <path fill="#34b233" d="M0 160h640v320H0z"/>   <path fill="#ea2839" d="M0 320h640v160H0z"/>   <g transform="translate(320 256.9)scale(176.87999)">     <path id="mm-a" fill="#fff" d="m0-1 .3 1h-.6z"/>     <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(-144)"/>     <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(-72)"/>     <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(72)"/>     <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(144)"/>   </g>  
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
         <path fill="#fecb00" d="M0 0h640v480H0z"/>   <path fill="#34b233" d="M0 160h640v320H0z"/>   <path fill="#ea2839" d="M0 320h640v160H0z"/>   <g transform="translate(320 256.9)scale(176.87999)">     <path id="mm-a" fill="#fff" d="m0-1 .3 1h-.6z"/>     <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(-144)"/>     <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(-72)"/>     <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(72)"/>     <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(144)"/>   </g>  
  </svg>
{/if}

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
    ariaLabel =  "st" , 
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
         <path fill="#12ad2b" d="M0 0h640v480H0z"/>   <path fill="#ffce00" d="M0 137.1h640V343H0z"/>   <path fill="#d21034" d="M0 0v480l240-240"/>   <g id="st-c" transform="translate(351.6 240)scale(.34286)">     <g id="st-b">       <path id="st-a" fill="#000001" d="M0-200V0h100" transform="rotate(18 0 -200)"/>       <use xlink:href="#st-a" width="100%" height="100%" transform="scale(-1 1)"/>     </g>     <use xlink:href="#st-b" width="100%" height="100%" transform="rotate(72)"/>     <use xlink:href="#st-b" width="100%" height="100%" transform="rotate(144)"/>     <use xlink:href="#st-b" width="100%" height="100%" transform="rotate(-144)"/>     <use xlink:href="#st-b" width="100%" height="100%" transform="rotate(-72)"/>   </g>   <use xlink:href="#st-c" width="100%" height="100%" x="700" transform="translate(-523.2)"/>  
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
         <path fill="#12ad2b" d="M0 0h640v480H0z"/>   <path fill="#ffce00" d="M0 137.1h640V343H0z"/>   <path fill="#d21034" d="M0 0v480l240-240"/>   <g id="st-c" transform="translate(351.6 240)scale(.34286)">     <g id="st-b">       <path id="st-a" fill="#000001" d="M0-200V0h100" transform="rotate(18 0 -200)"/>       <use xlink:href="#st-a" width="100%" height="100%" transform="scale(-1 1)"/>     </g>     <use xlink:href="#st-b" width="100%" height="100%" transform="rotate(72)"/>     <use xlink:href="#st-b" width="100%" height="100%" transform="rotate(144)"/>     <use xlink:href="#st-b" width="100%" height="100%" transform="rotate(-144)"/>     <use xlink:href="#st-b" width="100%" height="100%" transform="rotate(-72)"/>   </g>   <use xlink:href="#st-c" width="100%" height="100%" x="700" transform="translate(-523.2)"/>  
  </svg>
{/if}

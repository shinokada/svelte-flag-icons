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
    ariaLabel =  "tz" , 
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
         <defs>     <clipPath id="tz-a">       <path fill-opacity=".7" d="M10 0h160v120H10z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#tz-a)" transform="matrix(4 0 0 4 -40 0)">     <path fill="#09f" d="M0 0h180v120H0z"/>     <path fill="#090" d="M0 0h180L0 120z"/>     <path fill="#000001" d="M0 120h40l140-95V0h-40L0 95z"/>     <path fill="#ff0" d="M0 91.5 137.2 0h13.5L0 100.5zM29.3 120 180 19.5v9L42.8 120z"/>   </g>  
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
         <defs>     <clipPath id="tz-a">       <path fill-opacity=".7" d="M10 0h160v120H10z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#tz-a)" transform="matrix(4 0 0 4 -40 0)">     <path fill="#09f" d="M0 0h180v120H0z"/>     <path fill="#090" d="M0 0h180L0 120z"/>     <path fill="#000001" d="M0 120h40l140-95V0h-40L0 95z"/>     <path fill="#ff0" d="M0 91.5 137.2 0h13.5L0 100.5zM29.3 120 180 19.5v9L42.8 120z"/>   </g>  
  </svg>
{/if}

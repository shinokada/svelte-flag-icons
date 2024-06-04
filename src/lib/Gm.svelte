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
    ariaLabel =  "gm" , 
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
         <defs>     <clipPath id="gm-a">       <path fill-opacity=".7" d="M0-48h640v480H0z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#gm-a)" transform="translate(0 48)">     <path fill="red" d="M0-128h640V85.3H0z"/>     <path fill="#fff" d="M0 85.3h640V121H0z"/>     <path fill="#009" d="M0 120.9h640V263H0z"/>     <path fill="#fff" d="M0 263.1h640v35.6H0z"/>     <path fill="#090" d="M0 298.7h640V512H0z"/>   </g>  
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
         <defs>     <clipPath id="gm-a">       <path fill-opacity=".7" d="M0-48h640v480H0z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#gm-a)" transform="translate(0 48)">     <path fill="red" d="M0-128h640V85.3H0z"/>     <path fill="#fff" d="M0 85.3h640V121H0z"/>     <path fill="#009" d="M0 120.9h640V263H0z"/>     <path fill="#fff" d="M0 263.1h640v35.6H0z"/>     <path fill="#090" d="M0 298.7h640V512H0z"/>   </g>  
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
@prop ariaLabel =  "gm"
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->

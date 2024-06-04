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
    ariaLabel =  "bs" , 
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
         <defs>     <clipPath id="bs-a">       <path fill-opacity=".7" d="M-12 0h640v480H-12z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" clip-path="url(#bs-a)" transform="translate(12)">     <path fill="#fff" d="M968.5 480h-979V1.8h979z"/>     <path fill="#ffe900" d="M968.5 344.5h-979V143.3h979z"/>     <path fill="#08ced6" d="M968.5 480h-979V320.6h979zm0-318.7h-979V2h979z"/>     <path fill="#000001" d="M-11 0c2.3 0 391.8 236.8 391.8 236.8L-12 479.2z"/>   </g>  
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
         <defs>     <clipPath id="bs-a">       <path fill-opacity=".7" d="M-12 0h640v480H-12z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" clip-path="url(#bs-a)" transform="translate(12)">     <path fill="#fff" d="M968.5 480h-979V1.8h979z"/>     <path fill="#ffe900" d="M968.5 344.5h-979V143.3h979z"/>     <path fill="#08ced6" d="M968.5 480h-979V320.6h979zm0-318.7h-979V2h979z"/>     <path fill="#000001" d="M-11 0c2.3 0 391.8 236.8 391.8 236.8L-12 479.2z"/>   </g>  
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
@prop ariaLabel =  "bs"
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->

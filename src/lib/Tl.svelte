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
    ariaLabel =  "tl" , 
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
         <defs>     <clipPath id="tl-a">       <path fill-opacity=".7" d="M0 0h682.7v512H0z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" clip-path="url(#tl-a)" transform="scale(.9375)">     <path fill="#cb000f" d="M0 0h1031.2v512H0z"/>     <path fill="#f8c00c" d="M0 0c3.2 0 512 256.7 512 256.7L0 512z"/>     <path fill="#000001" d="M0 0c2.1 0 340.6 256.7 340.6 256.7L0 512z"/>     <path fill="#fff" d="M187.7 298.2 127 284.7l-31 52.8-5-59.7-60.7-13.3 54.9-24.9-3.3-59.3 40.2 43.4 55.4-25.3-28.9 54 39.2 45.8z"/>   </g>  
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
         <defs>     <clipPath id="tl-a">       <path fill-opacity=".7" d="M0 0h682.7v512H0z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" clip-path="url(#tl-a)" transform="scale(.9375)">     <path fill="#cb000f" d="M0 0h1031.2v512H0z"/>     <path fill="#f8c00c" d="M0 0c3.2 0 512 256.7 512 256.7L0 512z"/>     <path fill="#000001" d="M0 0c2.1 0 340.6 256.7 340.6 256.7L0 512z"/>     <path fill="#fff" d="M187.7 298.2 127 284.7l-31 52.8-5-59.7-60.7-13.3 54.9-24.9-3.3-59.3 40.2 43.4 55.4-25.3-28.9 54 39.2 45.8z"/>   </g>  
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
@prop ariaLabel =  "tl"
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->

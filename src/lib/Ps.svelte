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
    ariaLabel =  "ps" , 
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
         <defs>     <clipPath id="ps-a">       <path fill-opacity=".7" d="M-118 0h682.7v512H-118z"/>     </clipPath>   </defs>   <g clip-path="url(#ps-a)" transform="translate(110.6)scale(.9375)">     <g fill-rule="evenodd" stroke-width="1pt">       <path fill="#000001" d="M-246 0H778v170.7H-246z"/>       <path fill="#fff" d="M-246 170.7H778v170.6H-246z"/>       <path fill="#090" d="M-246 341.3H778V512H-246z"/>       <path fill="red" d="m-246 512 512-256L-246 0z"/>     </g>   </g>  
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
         <defs>     <clipPath id="ps-a">       <path fill-opacity=".7" d="M-118 0h682.7v512H-118z"/>     </clipPath>   </defs>   <g clip-path="url(#ps-a)" transform="translate(110.6)scale(.9375)">     <g fill-rule="evenodd" stroke-width="1pt">       <path fill="#000001" d="M-246 0H778v170.7H-246z"/>       <path fill="#fff" d="M-246 170.7H778v170.6H-246z"/>       <path fill="#090" d="M-246 341.3H778V512H-246z"/>       <path fill="red" d="m-246 512 512-256L-246 0z"/>     </g>   </g>  
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
@prop ariaLabel =  "ps"
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->

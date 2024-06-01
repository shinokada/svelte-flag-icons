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
    ariaLabel =  "kp" , 
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
         <defs>     <clipPath id="kp-a">       <path fill-opacity=".7" d="M5 .1h682.6V512H5.1z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" clip-path="url(#kp-a)" transform="translate(-4.8 -.1)scale(.93768)">     <path fill="#fff" stroke="#000" d="M776 511.5H-76V.5h852z"/>     <path fill="#3e5698" d="M776 419H-76v92.5h852z"/>     <path fill="#c60000" d="M776 397.6H-76V114.4h852z"/>     <path fill="#3e5698" d="M776 .6H-76V93h852z"/>     <path fill="#fff" d="M328.5 256c0 63.5-53 115-118.6 115S91.3 319.5 91.3 256s53-114.8 118.6-114.8c65.5 0 118.6 51.4 118.6 114.9z"/>     <path fill="#c40000" d="m175.8 270.6-57-40.7 71-.2 22.7-66.4 21.1 66.1 71-.4-57.9 41.2 21.3 66.1-57-40.7-58 41.3z"/>   </g>  
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
         <defs>     <clipPath id="kp-a">       <path fill-opacity=".7" d="M5 .1h682.6V512H5.1z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" clip-path="url(#kp-a)" transform="translate(-4.8 -.1)scale(.93768)">     <path fill="#fff" stroke="#000" d="M776 511.5H-76V.5h852z"/>     <path fill="#3e5698" d="M776 419H-76v92.5h852z"/>     <path fill="#c60000" d="M776 397.6H-76V114.4h852z"/>     <path fill="#3e5698" d="M776 .6H-76V93h852z"/>     <path fill="#fff" d="M328.5 256c0 63.5-53 115-118.6 115S91.3 319.5 91.3 256s53-114.8 118.6-114.8c65.5 0 118.6 51.4 118.6 114.9z"/>     <path fill="#c40000" d="m175.8 270.6-57-40.7 71-.2 22.7-66.4 21.1 66.1 71-.4-57.9 41.2 21.3 66.1-57-40.7-58 41.3z"/>   </g>  
  </svg>
{/if}

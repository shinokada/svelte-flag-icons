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
    ariaLabel =  "ax" , 
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
         <defs>     <clipPath id="ax-a">       <path fill-opacity=".7" d="M106.3 0h1133.3v850H106.3z"/>     </clipPath>   </defs>   <g clip-path="url(#ax-a)" transform="matrix(.56472 0 0 .56482 -60 -.1)">     <path fill="#0053a5" d="M0 0h1300v850H0z"/>     <g fill="#ffce00">       <path d="M400 0h250v850H400z"/>       <path d="M0 300h1300v250H0z"/>     </g>     <g fill="#d21034">       <path d="M475 0h100v850H475z"/>       <path d="M0 375h1300v100H0z"/>     </g>   </g>  
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
         <defs>     <clipPath id="ax-a">       <path fill-opacity=".7" d="M106.3 0h1133.3v850H106.3z"/>     </clipPath>   </defs>   <g clip-path="url(#ax-a)" transform="matrix(.56472 0 0 .56482 -60 -.1)">     <path fill="#0053a5" d="M0 0h1300v850H0z"/>     <g fill="#ffce00">       <path d="M400 0h250v850H400z"/>       <path d="M0 300h1300v250H0z"/>     </g>     <g fill="#d21034">       <path d="M475 0h100v850H475z"/>       <path d="M0 375h1300v100H0z"/>     </g>   </g>  
  </svg>
{/if}

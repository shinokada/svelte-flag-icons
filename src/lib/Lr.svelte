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
    ariaLabel =  "lr" , 
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
         <defs>     <clipPath id="lr-a">       <path fill-opacity=".7" d="M0 0h682.7v512H0z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" clip-path="url(#lr-a)" transform="scale(.9375)">     <path fill="#fff" d="M0 0h767.9v512H0z"/>     <path fill="#006" d="M0 0h232.7v232.8H0z"/>     <path fill="#c00" d="M0 464.9h767.9V512H0z"/>     <path fill="#c00" d="M0 465.4h767.9V512H0zm0-92.9h767.9v46.2H0zm0-93.2h766V326H0zM232.7 0h535.1v46.5H232.7zm0 186h535.1v46.8H232.7zm0-92.7h535.1v46.5H232.7z"/>     <path fill="#fff" d="m166.3 177.5-50.7-31-50.4 31.3 18.7-50.9-50.3-31.4 62.3-.4 19.3-50.7L135 95h62.3l-50.1 31.7z"/>   </g>  
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
         <defs>     <clipPath id="lr-a">       <path fill-opacity=".7" d="M0 0h682.7v512H0z"/>     </clipPath>   </defs>   <g fill-rule="evenodd" clip-path="url(#lr-a)" transform="scale(.9375)">     <path fill="#fff" d="M0 0h767.9v512H0z"/>     <path fill="#006" d="M0 0h232.7v232.8H0z"/>     <path fill="#c00" d="M0 464.9h767.9V512H0z"/>     <path fill="#c00" d="M0 465.4h767.9V512H0zm0-92.9h767.9v46.2H0zm0-93.2h766V326H0zM232.7 0h535.1v46.5H232.7zm0 186h535.1v46.8H232.7zm0-92.7h535.1v46.5H232.7z"/>     <path fill="#fff" d="m166.3 177.5-50.7-31-50.4 31.3 18.7-50.9-50.3-31.4 62.3-.4 19.3-50.7L135 95h62.3l-50.1 31.7z"/>   </g>  
  </svg>
{/if}

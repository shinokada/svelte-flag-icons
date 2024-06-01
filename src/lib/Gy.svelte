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
    ariaLabel =  "gy" , 
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
         <g fill-rule="evenodd">     <path fill="#399408" d="M2.4 0H640v480H2.4z"/>     <path fill="#fff" d="M.2 0c-.9 0 619.6 241.5 619.6 241.5L0 479.8z"/>     <path fill="#ffde08" d="M.3 20.2c3.4 0 559 217.9 555.9 220L1.9 463.2.3 20.3z"/>     <path fill="#000001" d="M1.9.8c1.8 0 290.9 240.9 290.9 240.9L1.8 477z"/>     <path fill="#de2110" d="M.3 33.9c1.6-15 260.9 208.4 260.9 208.4L.2 451.7V33.9z"/>   </g>  
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
         <g fill-rule="evenodd">     <path fill="#399408" d="M2.4 0H640v480H2.4z"/>     <path fill="#fff" d="M.2 0c-.9 0 619.6 241.5 619.6 241.5L0 479.8z"/>     <path fill="#ffde08" d="M.3 20.2c3.4 0 559 217.9 555.9 220L1.9 463.2.3 20.3z"/>     <path fill="#000001" d="M1.9.8c1.8 0 290.9 240.9 290.9 240.9L1.8 477z"/>     <path fill="#de2110" d="M.3 33.9c1.6-15 260.9 208.4 260.9 208.4L.2 451.7V33.9z"/>   </g>  
  </svg>
{/if}

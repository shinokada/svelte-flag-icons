<script lang='ts'>
  import { getContext } from 'svelte';
  import type { SVGAttributes } from 'svelte/elements';

  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps extends SVGAttributes<SVGElement> {
    size?: string;
    role?: string;
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
    title, 
    desc, 
    ariaLabel =  "iq" , 
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
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
       <path fill="#fff" d="M0 160h640v160H0z"/>   <path fill="#ce1126" d="M0 0h640v160H0z"/>   <path fill="#000001" d="M0 320h640v160H0z"/>   <g fill="#007a3d" transform="translate(-179.3 -92.8)scale(1.75182)">     <path d="M325.5 173.2a5 5 0 0 1-1.4-1c-.3-.5-.1-.5 1.2-.2 2.3.7 3.8.4 5.3-.8l1.3-1.1 1.5.7c.9.5 1.8.8 2 .7.7-.2 2.1-2 2-2.6 0-.7.6-.5 1 .3.6 1.6-.3 3.5-2 3.9-.7.2-1.4.1-2.6-.3-1.4-.5-1.7-.5-2.4 0a5.4 5.4 0 0 1-5.9.4m5.8-5.3a8 8 0 0 1-1-4c.1-.6.3-.8.8-.6 1 .3 1.2 1 1 3 0 1.8-.3 2.3-.8 1.6m-67.6-1.9c-.1 1.3 2.4 4.6 3.5 5.2-.8.3-1.7.2-2.4.5-4 4-18.4 18-21 21.4 7.8.2 16.4-.1 23.7-.4 0-5.3 5-5.6 8.4-7.5 1.7 2.7 6 2.5 6.6 6.6v17.6H216a9.7 9.7 0 0 1-12.3 7.5c2-2 5.4-2.8 6.6-5.7 1-6.4-2-10.3-4-14a24 24 0 0 0 7-3.6c-2.3 7 6.2 6.3 12.4 6.1.2-2.4.1-5.2-1.7-5.6 2.3-.9 2.7-1.2 6.6-4.4v9.6l46.1-.1c0-3 .8-7.9-1.6-7.9-2.2 0 0 6.2-1.8 6.2h-35.7v-6c1.5-1.6 1.3-1.5 11.6-11.8 1-1 8.3-7.6 14.6-13.7zm89.1-.3c2.5 1.4 4.5 3.2 7.5 4-.3 1.3-1.5 1.8-1.8 3.1v27c3.4.7 4.2-1.3 5.8-2.3.4 4.3 3.2 8.5 3 12h-14.5zm-19.4 14.5s5.3-4.5 5.3-4.7V199h3.8l-.1-26.3c1.5-1.6 4.6-3.8 5.3-5.4v42h-33.4c-.5-8.7-.6-17.7 9.6-15.8V190c-.3-.6-.9.1-1-.7 1.6-1.6 2.1-2 6.5-5.8l.1 15.5h3.9zm-12.6 18.6c.7 1 3.2 1 3-.8-.3-1.5-3.5-1-3 .8"/>     <circle cx="224" cy="214.4" r="2"/>     <path d="M287 165.8c2.5 1.3 4.5 3.2 7.6 4-.4 1.2-1.5 1.7-1.8 3v27c3.4.7 4.1-1.2 5.7-2.3.5 4.3 3.2 8.6 3.1 12H287z"/>   </g>  
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel =  "iq"
@prop ...restProps
-->

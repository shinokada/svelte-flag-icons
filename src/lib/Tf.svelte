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
    ariaLabel =  "tf" , 
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
       <defs>     <path id="tf-a" fill="#fff" d="m0-21 12.3 38L-20-6.5h40L-12.3 17z"/>   </defs>   <path fill="#002395" d="M0 0h640v480H0z"/>   <path fill="#fff" d="M0 0h292.8v196.8H0z"/>   <path fill="#002395" d="M0 0h96v192H0z"/>   <path fill="#ed2939" d="M192 0h96v192h-96z"/>   <path fill="#fff" d="m426 219.6 15.4 24.6h44V330l-33-51.6-44.4 70.8h21.6l22.8-40.8 46.8 84 46.8-84 22.8 40.8h21.6L546 278.4 513 330v-47.4h19.8l14.7-23.4H513v-15h44l15.4-24.6zm51.6 105h-48v16.8h48zm91.2 0h-48v16.8h48z"/>   <use xlink:href="#tf-a" width="100%" height="100%" x="416" y="362" transform="scale(1.2)"/>   <use xlink:href="#tf-a" width="100%" height="100%" x="371" y="328" transform="scale(1.2)"/>   <use xlink:href="#tf-a" width="100%" height="100%" x="461" y="328" transform="scale(1.2)"/>   <use xlink:href="#tf-a" width="100%" height="100%" x="333" y="227" transform="scale(1.2)"/>   <use xlink:href="#tf-a" width="100%" height="100%" x="499" y="227" transform="scale(1.2)"/>  
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel =  "tf"
@prop ...restProps
-->

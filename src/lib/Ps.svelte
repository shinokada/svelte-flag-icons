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
    ariaLabel =  "ps" , 
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
       <defs>     <clipPath id="ps-a">       <path fill-opacity=".7" d="M-118 0h682.7v512H-118z"/>     </clipPath>   </defs>   <g clip-path="url(#ps-a)" transform="translate(110.6)scale(.9375)">     <g fill-rule="evenodd" stroke-width="1pt">       <path fill="#000001" d="M-246 0H778v170.7H-246z"/>       <path fill="#fff" d="M-246 170.7H778v170.6H-246z"/>       <path fill="#090" d="M-246 341.3H778V512H-246z"/>       <path fill="red" d="m-246 512 512-256L-246 0z"/>     </g>   </g>  
</svg>


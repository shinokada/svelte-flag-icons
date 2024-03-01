<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of es ct';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-es-ct"
  width={size}
  height={size}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 640 480"
>
  <path fill="#fcdd09" d="M0 0h640v480H0z" />
  <path
    stroke="#da121a"
    stroke-width="60"
    d="M0 90h810m0 120H0m0 120h810m0 120H0"
    transform="scale(.79012 .88889)"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of es ct';
-->

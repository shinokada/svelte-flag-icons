<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of mv';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-mv"
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
  <path fill="#d21034" d="M0 0h640v480H0z" />
  <path fill="#007e3a" d="M120 120h400v240H120z" />
  <circle cx="350" cy="240" r="80" fill="#fff" />
  <circle cx="380" cy="240" r="80" fill="#007e3a" />
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of mv';
-->

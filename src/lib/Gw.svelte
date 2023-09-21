<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of gw';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icons-gw"
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
  <path fill="#ce1126" d="M0 0h220v480H0z" />
  <path fill="#fcd116" d="M220 0h420v240H220z" />
  <path fill="#009e49" d="M220 240h420v240H220z" />
  <g id="gw-b" transform="matrix(80 0 0 80 110 240)">
    <path id="gw-a" d="M0-1v1h.5" transform="rotate(18 0 -1)" />
    <use xlink:href="#gw-a" width="100%" height="100%" transform="scale(-1 1)" />
  </g>
  <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(72 110 240)" />
  <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(144 110 240)" />
  <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(-144 110 240)" />
  <use xlink:href="#gw-b" width="100%" height="100%" transform="rotate(-72 110 240)" />
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of gw';
-->

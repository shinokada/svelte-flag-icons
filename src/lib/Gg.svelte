<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of gg';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icons-gg"
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
  <path fill="#fff" d="M0 0h640v480H0z" />
  <path fill="#e8112d" d="M256 0h128v480H256z" />
  <path fill="#e8112d" d="M0 176h640v128H0z" />
  <path id="gg-a" fill="#f9dd16" d="m110 286.7 23.3-23.4h210v-46.6h-210L110 193.3z" />
  <use xlink:href="#gg-a" width="36" height="24" transform="rotate(90 320 240)" />
  <use xlink:href="#gg-a" width="36" height="24" transform="rotate(-90 320 240)" />
  <use xlink:href="#gg-a" width="36" height="24" transform="rotate(180 320 240)" />
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of gg';
-->

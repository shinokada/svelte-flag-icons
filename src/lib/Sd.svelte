<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of sd';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-sd"
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
  <defs>
    <clipPath id="sd-a">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#sd-a)" transform="scale(.9375)">
    <path d="M0 341.3h1024V512H0z" />
    <path fill="#fff" d="M0 170.6h1024v170.7H0z" />
    <path fill="red" d="M0 0h1024.8v170.7H0z" />
    <path fill="#009a00" d="M0 0v512l341.3-256L0 0z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of sd';
-->

<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of cg';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-cg"
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
    <clipPath id="cg-a">
      <path fill-opacity=".7" d="M-79.5 32h640v480h-640z" />
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#cg-a)" transform="translate(79.5 -32)">
    <path fill="#ff0" d="M-119.5 32h720v480h-720z" />
    <path fill="#00ca00" d="M-119.5 32v480l480-480h-480z" />
    <path fill="red" d="M120.5 512h480V32l-480 480z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of cg';
-->

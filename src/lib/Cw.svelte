<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of cw';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icons-cw"
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
    <clipPath id="cw-a">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
    </clipPath>
    <path id="cw-b" d="m0-1 .2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z" />
  </defs>
  <g clip-path="url(#cw-a)" transform="scale(.94)">
    <path fill="#002b7f" d="M0 0h768v512H0z" />
    <path fill="#f9e814" d="M0 320h768v64H0z" />
    <use
      xlink:href="#cw-b"
      width="13500"
      height="9000"
      x="2"
      y="2"
      fill="#fff"
      transform="scale(42.67)"
    />
    <use
      xlink:href="#cw-b"
      width="13500"
      height="9000"
      x="3"
      y="3"
      fill="#fff"
      transform="scale(56.9)"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of cw';
-->

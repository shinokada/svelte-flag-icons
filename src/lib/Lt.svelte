<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of lt';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-lt"
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
  <g fill-rule="evenodd" stroke-width="1pt" transform="scale(.64143 .96773)">
    <rect
      width="1063"
      height="708.7"
      fill="#006a44"
      rx="0"
      ry="0"
      transform="scale(.93865 .69686)"
    />
    <rect
      width="1063"
      height="236.2"
      y="475.6"
      fill="#c1272d"
      rx="0"
      ry="0"
      transform="scale(.93865 .69686)"
    />
    <path fill="#fdb913" d="M0 0h997.8v164.6H0z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of lt';
-->

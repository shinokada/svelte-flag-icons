<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of gm';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-gm"
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
    <clipPath id="gm-a">
      <path fill-opacity=".7" d="M0-48h640v480H0z" />
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#gm-a)" transform="translate(0 48)">
    <path fill="red" d="M0-128h640V85.3H0z" />
    <path fill="#fff" d="M0 85.3h640V121H0z" />
    <path fill="#009" d="M0 120.9h640V263H0z" />
    <path fill="#fff" d="M0 263.1h640v35.6H0z" />
    <path fill="#090" d="M0 298.7h640V512H0z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of gm';
-->

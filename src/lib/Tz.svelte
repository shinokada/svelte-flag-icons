<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of tz';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-tz"
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
    <clipPath id="tz-a">
      <path fill-opacity=".7" d="M10 0h160v120H10z" />
    </clipPath>
  </defs>
  <g
    fill-rule="evenodd"
    stroke-width="1pt"
    clip-path="url(#tz-a)"
    transform="matrix(4 0 0 4 -40 0)"
  >
    <path fill="#09f" d="M0 0h180v120H0z" />
    <path fill="#090" d="M0 0h180L0 120V0z" />
    <path d="M0 120h40l140-95V0h-40L0 95v25z" />
    <path fill="#ff0" d="M0 91.5 137.2 0h13.5L0 100.5v-9zM29.3 120 180 19.5v9L42.8 120H29.3z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of tz';
-->

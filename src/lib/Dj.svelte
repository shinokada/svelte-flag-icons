<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of dj';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-dj"
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
    <clipPath id="dj-a">
      <path fill-opacity=".7" d="M-40 0h682.7v512H-40z" />
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#dj-a)" transform="translate(37.5) scale(.94)">
    <path fill="#0c0" d="M-40 0h768v512H-40z" />
    <path fill="#69f" d="M-40 0h768v256H-40z" />
    <path fill="#fffefe" d="m-40 0 382.7 255.7L-40 511V0z" />
    <path
      fill="red"
      d="M119.8 292 89 270l-30.7 22.4L69.7 256l-30.6-22.5 37.9-.3 11.7-36.3 12 36.2h37.9l-30.5 22.7 11.7 36.4z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of dj';
-->

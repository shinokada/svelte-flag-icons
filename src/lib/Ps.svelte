<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of ps';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-ps"
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
    <clipPath id="ps-a">
      <path fill-opacity=".7" d="M-118 0h682.7v512H-118z" />
    </clipPath>
  </defs>
  <g clip-path="url(#ps-a)" transform="translate(110.6) scale(.9375)">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path d="M-246 0H778v170.7H-246z" />
      <path fill="#fff" d="M-246 170.7H778v170.6H-246z" />
      <path fill="#090" d="M-246 341.3H778V512H-246z" />
      <path fill="red" d="m-246 512 512-256L-246 0v512z" />
    </g>
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of ps';
-->

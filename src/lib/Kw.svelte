<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of kw';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-kw"
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
    <clipPath id="kw-a">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#kw-a)" transform="scale(.9375)">
    <path fill="#fff" d="M0 170.6h1024v170.7H0z" />
    <path fill="#f31830" d="M0 341.3h1024V512H0z" />
    <path fill="#00d941" d="M0 0h1024v170.7H0z" />
    <path d="M0 0v512l255.4-170.7.6-170.8L0 0z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of kw';
-->

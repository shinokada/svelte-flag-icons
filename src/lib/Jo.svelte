<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of jo';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-jo"
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
    <clipPath id="jo-a">
      <path fill-opacity=".7" d="M-117.8 0h682.6v512h-682.6z" />
    </clipPath>
  </defs>
  <g clip-path="url(#jo-a)" transform="translate(110.5) scale(.9375)">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path d="M-117.8 0h1024v170.7h-1024z" />
      <path fill="#fff" d="M-117.8 170.7h1024v170.6h-1024z" />
      <path fill="#090" d="M-117.8 341.3h1024V512h-1024z" />
      <path fill="red" d="m-117.8 512 512-256-512-256v512z" />
      <path
        fill="#fff"
        d="m24.5 289 5.7-24.9H4.7l23-11-15.9-19.9 23 11 5.6-24.8 5.7 24.9L69 233.2l-16 19.9 23 11H50.6l5.7 24.9-15.9-20z"
      />
    </g>
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of jo';
-->

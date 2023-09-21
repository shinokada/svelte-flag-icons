<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of bj';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-bj"
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
    <clipPath id="bj-a">
      <path fill="gray" d="M67.6-154h666v666h-666z" />
    </clipPath>
  </defs>
  <g clip-path="url(#bj-a)" transform="matrix(.961 0 0 .7207 -65 111)">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#319400" d="M0-154h333v666H0z" />
      <path fill="#ffd600" d="M333-154h666v333H333z" />
      <path fill="#de2110" d="M333 179h666v333H333z" />
    </g>
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of bj';
-->

<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of th';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-th"
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
  <g fill-rule="evenodd">
    <path fill="#f4f5f8" d="M0 0h640v480H0z" />
    <path fill="#2d2a4a" d="M0 162.5h640v160H0z" />
    <path fill="#a51931" d="M0 0h640v82.5H0zm0 400h640v80H0z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of th';
-->

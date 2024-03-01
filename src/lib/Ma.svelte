<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of ma';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-ma"
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
  <path fill="#c1272d" d="M640 0H0v480h640z" />
  <path
    fill="none"
    stroke="#006233"
    stroke-width="11.7"
    d="M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of ma';
-->

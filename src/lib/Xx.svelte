<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of xx';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-xx"
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
  <path
    fill="#fff"
    fill-rule="evenodd"
    stroke="#adb5bd"
    stroke-width="1.1"
    d="M.5.5h638.9v478.9H.5z"
  />
  <path fill="none" stroke="#adb5bd" stroke-width="1.1" d="m.5.5 639 479m0-479-639 479" />
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of xx';
-->

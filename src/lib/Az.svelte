<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of az';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-az"
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
  <path fill="#3f9c35" d="M.1 0h640v480H.1z" />
  <path fill="#ed2939" d="M.1 0h640v320H.1z" />
  <path fill="#00b9e4" d="M.1 0h640v160H.1z" />
  <circle cx="304" cy="240" r="72" fill="#fff" />
  <circle cx="320" cy="240" r="60" fill="#ed2939" />
  <path
    fill="#fff"
    d="m384 200 7.7 21.5 20.6-9.8-9.8 20.7L424 240l-21.5 7.7 9.8 20.6-20.6-9.8L384 280l-7.7-21.5-20.6 9.8 9.8-20.6L344 240l21.5-7.7-9.8-20.6 20.6 9.8L384 200z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of az';
-->

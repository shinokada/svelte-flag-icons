<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of lc';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-lc"
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
    <path fill="#65cfff" d="M0 0h640v480H0z" />
    <path fill="#fff" d="m318.9 42 162.7 395.3-322.6.9L318.9 42z" />
    <path d="m319 96.5 140.8 340-279 .8L319 96.5z" />
    <path fill="#ffce00" d="m318.9 240.1 162.7 197.6-322.6.5 159.9-198.1z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of lc';
-->

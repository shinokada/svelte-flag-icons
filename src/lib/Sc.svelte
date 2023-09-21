<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of sc';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-sc"
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
  <path fill="#fff" d="M0 0h640v480H0Z" />
  <path fill="#d92223" d="M0 480V0h640v160z" />
  <path fill="#fcd955" d="M0 480V0h426.7z" />
  <path fill="#003d88" d="M0 480V0h213.3z" />
  <path fill="#007a39" d="m0 480 640-160v160z" />
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of sc';
-->

<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of pw';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-pw"
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
    <clipPath id="pw-a">
      <path fill-opacity=".7" d="M-70.3 0h640v480h-640z" />
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#pw-a)" transform="translate(70.3)">
    <path fill="#4aadd6" d="M-173.4 0h846.3v480h-846.3z" />
    <path fill="#ffde00" d="M335.6 232.1a135.9 130.1 0 1 1-271.7 0 135.9 130.1 0 1 1 271.7 0z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of pw';
-->

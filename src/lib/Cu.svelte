<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of cu';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-cu"
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
    <clipPath id="cu-a">
      <path fill-opacity=".7" d="M-32 0h682.7v512H-32z" />
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#cu-a)" transform="translate(30) scale(.94)">
    <path fill="#002a8f" d="M-32 0h768v512H-32z" />
    <path fill="#fff" d="M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z" />
    <path fill="#cb1515" d="m-32 0 440.7 255.7L-32 511V0z" />
    <path
      fill="#fff"
      d="M161.8 325.5 114.3 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3 18 58z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of cu';
-->

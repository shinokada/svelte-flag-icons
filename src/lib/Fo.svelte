<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of fo';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-fo"
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
    <clipPath id="fo-a">
      <path fill-opacity=".7" d="M-78 32h640v480H-78z" />
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="0" clip-path="url(#fo-a)" transform="translate(78 -32)">
    <path fill="#fff" d="M-78 32h663.9v480H-78z" />
    <path
      fill="#003897"
      d="M-76 218.7h185.9V32H216v186.7h371.8v106.6H216V512H109.9V325.3h-186V218.7z"
    />
    <path
      fill="#d72828"
      d="M-76 245.3h212.4V32h53.1v213.3H588v53.4H189.5V512h-53V298.7H-76v-53.4z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of fo';
-->

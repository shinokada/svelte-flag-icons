<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of il';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-il"
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
    <clipPath id="il-a">
      <path fill-opacity=".7" d="M-87.6 0H595v512H-87.6z" />
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#il-a)" transform="translate(82.1) scale(.94)">
    <path fill="#fff" d="M619.4 512H-112V0h731.4z" />
    <path
      fill="#0038b8"
      d="M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275 110.1 191.6L359 191.6l-222.6-.8z"
    />
    <path fill="#fff" d="m225.8 317.8 20.9 35.5 21.4-35.3-42.4-.2z" />
    <path fill="#0038b8" d="M136 320.6 246.2 129l112.4 190.8-222.6.8z" />
    <path
      fill="#fff"
      d="m225.8 191.6 20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5 41.2.3-19.8 36.3-21.4-36.6zm151.2 67 20.9 35.5-41.7-.5 20.8-35zm20.5-67-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of il';
-->

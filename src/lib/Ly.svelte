<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of ly';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-ly"
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
    <clipPath id="ly-a">
      <path d="M166.7-20h666.6v500H166.7z" />
    </clipPath>
  </defs>
  <g clip-path="url(#ly-a)" transform="matrix(.96 0 0 .96 -160 19.2)">
    <path fill="#239e46" d="M0-20h1000v500H0z" />
    <path d="M0-20h1000v375H0z" />
    <path fill="#e70013" d="M0-20h1000v125H0z" />
    <path
      fill="#fff"
      d="M544.2 185.8a54.3 54.3 0 1 0 0 88.4 62.5 62.5 0 1 1 0-88.4M530.4 230l84.1-27.3-52 71.5v-88.4l52 71.5z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of ly';
-->

<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of in';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icons-in"
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
  <path fill="#f93" d="M0 0h640v160H0z" />
  <path fill="#fff" d="M0 160h640v160H0z" />
  <path fill="#128807" d="M0 320h640v160H0z" />
  <g transform="matrix(3.2 0 0 3.2 320 240)">
    <circle r="20" fill="#008" />
    <circle r="17.5" fill="#fff" />
    <circle r="3.5" fill="#008" />
    <g id="in-d">
      <g id="in-c">
        <g id="in-b">
          <g id="in-a" fill="#008">
            <circle r=".9" transform="rotate(7.5 -8.8 133.5)" />
            <path d="M0 17.5.6 7 0 2l-.6 5L0 17.5z" />
          </g>
          <use xlink:href="#in-a" width="100%" height="100%" transform="rotate(15)" />
        </g>
        <use xlink:href="#in-b" width="100%" height="100%" transform="rotate(30)" />
      </g>
      <use xlink:href="#in-c" width="100%" height="100%" transform="rotate(60)" />
    </g>
    <use xlink:href="#in-d" width="100%" height="100%" transform="rotate(120)" />
    <use xlink:href="#in-d" width="100%" height="100%" transform="rotate(-120)" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of in';
-->

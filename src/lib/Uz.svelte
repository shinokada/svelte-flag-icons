<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of uz';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icons-uz"
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
  <path fill="#1eb53a" d="M0 320h640v160H0z" />
  <path fill="#0099b5" d="M0 0h640v160H0z" />
  <path fill="#ce1126" d="M0 153.6h640v172.8H0z" />
  <path fill="#fff" d="M0 163.2h640v153.6H0z" />
  <circle cx="134.4" cy="76.8" r="57.6" fill="#fff" />
  <circle cx="153.6" cy="76.8" r="57.6" fill="#0099b5" />
  <g fill="#fff" transform="matrix(1.92 0 0 1.92 261.1 122.9)">
    <g id="uz-e">
      <g id="uz-d">
        <g id="uz-c">
          <g id="uz-b">
            <path id="uz-a" d="M0-6-1.9-.3 1 .7" />
            <use xlink:href="#uz-a" width="100%" height="100%" transform="scale(-1 1)" />
          </g>
          <use xlink:href="#uz-b" width="100%" height="100%" transform="rotate(72)" />
        </g>
        <use xlink:href="#uz-b" width="100%" height="100%" transform="rotate(-72)" />
        <use xlink:href="#uz-c" width="100%" height="100%" transform="rotate(144)" />
      </g>
      <use xlink:href="#uz-d" width="100%" height="100%" y="-24" />
      <use xlink:href="#uz-d" width="100%" height="100%" y="-48" />
    </g>
    <use xlink:href="#uz-e" width="100%" height="100%" x="24" />
    <use xlink:href="#uz-e" width="100%" height="100%" x="48" />
    <use xlink:href="#uz-d" width="100%" height="100%" x="-48" />
    <use xlink:href="#uz-d" width="100%" height="100%" x="-24" />
    <use xlink:href="#uz-d" width="100%" height="100%" x="-24" y="-24" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of uz';
-->

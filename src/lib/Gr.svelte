<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'flag of gr';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-gr"
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
  <path fill="#0d5eaf" fill-rule="evenodd" d="M0 0h640v53.3H0z" />
  <path fill="#fff" fill-rule="evenodd" d="M0 53.3h640v53.4H0z" />
  <path fill="#0d5eaf" fill-rule="evenodd" d="M0 106.7h640V160H0z" />
  <path fill="#fff" fill-rule="evenodd" d="M0 160h640v53.3H0z" />
  <path fill="#0d5eaf" d="M0 0h266.7v266.7H0z" />
  <path fill="#0d5eaf" fill-rule="evenodd" d="M0 213.3h640v53.4H0z" />
  <path fill="#fff" fill-rule="evenodd" d="M0 266.7h640V320H0z" />
  <path fill="#0d5eaf" fill-rule="evenodd" d="M0 320h640v53.3H0z" />
  <path fill="#fff" fill-rule="evenodd" d="M0 373.3h640v53.4H0z" />
  <g fill="#fff" fill-rule="evenodd" stroke-width="1.3">
    <path d="M106.7 0H160v266.7h-53.3z" />
    <path d="M0 106.7h266.7V160H0z" />
  </g>
  <path fill="#0d5eaf" d="M0 426.7h640V480H0z" />
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'flag of gr';
-->

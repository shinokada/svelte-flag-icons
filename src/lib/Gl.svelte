<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of gl';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-gl"
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
  <path fill="#fff" d="M0 0h640v480H0z" />
  <path fill="#d00c33" d="M0 240h640v240H0zm80 0a160 160 0 1 0 320 0 160 160 0 0 0-320 0" />
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'flag of gl';
-->

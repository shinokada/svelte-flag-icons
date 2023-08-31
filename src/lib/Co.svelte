<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of co';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-co"
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
  <g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#ffe800" d="M0 0h640v480H0z" />
    <path fill="#00148e" d="M0 240h640v240H0z" />
    <path fill="#da0010" d="M0 360h640v120H0z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'flag of co';
-->

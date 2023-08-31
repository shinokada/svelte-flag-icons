<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of pl';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-pl"
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
  <g fill-rule="evenodd">
    <path fill="#fff" d="M640 480H0V0h640z" />
    <path fill="#dc143c" d="M640 480H0V240h640z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'flag of pl';
-->

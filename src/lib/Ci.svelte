<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of ci';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-ci"
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
    <path fill="#00cd00" d="M426.8 0H640v480H426.8z" />
    <path fill="#ff9a00" d="M0 0h212.9v480H0z" />
    <path fill="#fff" d="M212.9 0h214v480h-214z" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flag-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'flag of ci';
-->

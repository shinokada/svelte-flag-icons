<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of ye';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-ye"
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
    <path fill="#fff" d="M0 0h640v472.8H0z" />
    <path fill="#f10600" d="M0 0h640v157.4H0z" />
    <path d="M0 322.6h640V480H0z" />
  </g>
</svg>

<!--
@component
[Go to Document](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = '24';
@prop role = 'img';
@prop ariaLabel = 'icon file name';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->

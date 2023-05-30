<script>
  export let size = '24';
  export let ariaLabel = 'flag of ee';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-ee"
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
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
    <rect width="640" height="477.9" rx="0" ry="0" />
    <rect width="640" height="159.3" y="320.7" fill="#fff" rx="0" ry="0" />
    <path fill="#1791ff" d="M0 0h640v159.3H0z" />
  </g>
</svg>

<!--
@component
[Go to Document](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = '24';
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

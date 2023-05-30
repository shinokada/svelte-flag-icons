<script>
  export let size = '24';
  export let ariaLabel = 'flag of cp';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-cp"
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
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path fill="#002654" d="M0 0h213.3v480H0z" />
    <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
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

<script>
  export let size = '24';
  export let ariaLabel = 'flag of mg';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-mg"
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
    <path fill="#fc3d32" d="M213.3 0H640v240H213.3z" />
    <path fill="#007e3a" d="M213.3 240H640v240H213.3z" />
    <path fill="#fff" d="M0 0h213.3v480H0z" />
  </g>
</svg>

<!--
@component
[Go to Document](https://svelte-ant-design-icons.codewithshin.com/)
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

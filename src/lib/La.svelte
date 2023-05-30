<script>
  export let size = '24';
  export let ariaLabel = 'flag of la';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-la"
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
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h640v480H0z" />
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)">
    <path fill="#ce1126" d="M-40 0h720v480H-40z" />
    <path fill="#002868" d="M-40 119.3h720v241.4H-40z" />
    <path fill="#fff" d="M423.4 240a103.4 103.4 0 1 1-206.8 0 103.4 103.4 0 1 1 206.8 0z" />
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

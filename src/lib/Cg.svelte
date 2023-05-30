<script>
  export let size = '24';
  export let ariaLabel = 'flag of cg';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-cg"
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
      <path fill-opacity=".7" d="M-79.5 32h640v480h-640z" />
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#a)" transform="translate(79.5 -32)">
    <path fill="#ff0" d="M-119.5 32h720v480h-720z" />
    <path fill="#00ca00" d="M-119.5 32v480l480-480h-480z" />
    <path fill="red" d="M120.5 512h480V32l-480 480z" />
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

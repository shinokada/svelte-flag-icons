<script>
  export let size = '24';
  export let ariaLabel = 'flag of sr';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-sr"
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
  <path fill="#377e3f" d="M.1 0h640v480H.1z" />
  <path fill="#fff" d="M.1 96h640v288H.1z" />
  <path fill="#b40a2d" d="M.1 144h640v192H.1z" />
  <path fill="#ecc81d" d="m320 153.2 56.4 173.6-147.7-107.3h182.6L263.6 326.8z" />
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

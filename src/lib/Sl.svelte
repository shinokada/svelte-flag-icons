<script>
  export let size = '24';
  export let ariaLabel = 'flag of sl';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-sl"
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
  <g fill-rule="evenodd">
    <path fill="#0000cd" d="M0 320.3h640V480H0z" />
    <path fill="#fff" d="M0 160.7h640v159.6H0z" />
    <path fill="#00cd00" d="M0 0h640v160.7H0z" />
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

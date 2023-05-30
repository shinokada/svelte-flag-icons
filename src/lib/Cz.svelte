<script>
  export let size = '24';
  export let ariaLabel = 'flag of cz';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-cz"
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
  <path fill="#fff" d="M0 0h640v240H0z" />
  <path fill="#d7141a" d="M0 240h640v240H0z" />
  <path fill="#11457e" d="M360 240 0 0v480z" />
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

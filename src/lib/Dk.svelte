<script>
  export let size = '24';
  export let ariaLabel = 'flag of dk';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-dk"
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
  <path fill="#c8102e" d="M0 0h640.1v480H0z" />
  <path fill="#fff" d="M205.7 0h68.6v480h-68.6z" />
  <path fill="#fff" d="M0 205.7h640.1v68.6H0z" />
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

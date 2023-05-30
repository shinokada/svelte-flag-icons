<script>
  export let size = '24';
  export let ariaLabel = 'flag of bd';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-bd"
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
  <path fill="#006a4e" d="M0 0h640v480H0z" />
  <circle cx="280" cy="240" r="160" fill="#f42a41" />
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

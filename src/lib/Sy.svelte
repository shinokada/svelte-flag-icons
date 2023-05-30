<script>
  export let size = '24';
  export let ariaLabel = 'flag of sy';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-sy"
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
  <path d="M0 0h640v480H0Z" />
  <path fill="#fff" d="M0 0h640v320H0Z" />
  <path fill="#ce1126" d="M0 0h640v160H0Z" />
  <path fill="#007a3d" d="m161 300 39-120 39 120-102-74.2h126M401 300l39-120 39 120-102-74.2h126" />
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

<script>
  export let size = '24';
  export let ariaLabel = 'flag of ru';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-ru"
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
    <path fill="#0039a6" d="M0 160h640v320H0z" />
    <path fill="#d52b1e" d="M0 320h640v160H0z" />
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

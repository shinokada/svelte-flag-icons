<script>
  export let size = '24';
  export let ariaLabel = 'flag of to';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-to"
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
    <path fill="#c10000" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 0h250v200.3H0z" />
    <g fill="#c10000">
      <path d="M102.8 31.2h39.9v139.6h-39.8z" />
      <path d="M192.6 81v40H53V81z" />
    </g>
  </g>
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

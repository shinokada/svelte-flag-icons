<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of hu';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-hu"
  width={size}
  height={size}
  {...$$restProps}
  {role}
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
    <path fill="#fff" d="M640 480H0V0h640z" />
    <path fill="#388d00" d="M640 480H0V320h640z" />
    <path fill="#d43516" d="M640 160.1H0V.1h640z" />
  </g>
</svg>

<!--
@component
[Go to Document](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = '24';
@prop role = 'img';
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

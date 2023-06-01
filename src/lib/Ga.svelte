<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of ga';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-ga"
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
    <path fill="#ffe700" d="M640 480H0V0h640z" />
    <path fill="#36a100" d="M640 160H0V0h640z" />
    <path fill="#006dbc" d="M640 480H0V320h640z" />
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

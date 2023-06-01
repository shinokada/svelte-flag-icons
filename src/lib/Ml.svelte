<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of ml';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-ml"
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
    <path fill="red" d="M425.8 0H640v480H425.7z" />
    <path fill="#009a00" d="M0 0h212.9v480H0z" />
    <path fill="#ff0" d="M212.9 0h214v480h-214z" />
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

<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of ro';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-ro"
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
  <g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#00319c" d="M0 0h213.3v480H0z" />
    <path fill="#ffde00" d="M213.3 0h213.4v480H213.3z" />
    <path fill="#de2110" d="M426.7 0H640v480H426.7z" />
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

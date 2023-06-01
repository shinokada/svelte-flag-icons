<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of tt';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-tt"
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
  <path fill="#fff" d="M0 0h640v480H0z" />
  <path
    fill="#e00000"
    fill-rule="evenodd"
    d="M463.7 480 0 1v478.8l463.7.2zM176.3 0 640 479V.2L176.3 0z"
  />
  <path fill-rule="evenodd" d="M27.7.2h118.6l468.2 479.3H492.2L27.7.2z" />
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

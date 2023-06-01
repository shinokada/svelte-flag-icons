<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of ae';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-ae"
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
  <path fill="#00732f" d="M0 0h640v160H0z" />
  <path fill="#fff" d="M0 160h640v160H0z" />
  <path d="M0 320h640v160H0z" />
  <path fill="red" d="M0 0h220v480H0z" />
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

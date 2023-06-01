<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of fi';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-fi"
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
  <path fill="#002f6c" d="M0 174.5h640v131H0z" />
  <path fill="#002f6c" d="M175.5 0h130.9v480h-131z" />
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

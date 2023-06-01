<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of id';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-id"
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
  <path fill="#e70011" d="M0 0h640v240H0Z" />
  <path fill="#fff" d="M0 240h640v240H0Z" />
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

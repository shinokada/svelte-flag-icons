<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of gb sct';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-gb-sct"
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
  <path fill="#0065bd" d="M0 0h640v480H0z" />
  <path stroke="#fff" stroke-width=".6" d="m0 0 5 3M0 3l5-3" transform="scale(128 160)" />
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

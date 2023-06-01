<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of no';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-no"
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
  <path fill="#ed2939" d="M0 0h640v480H0z" />
  <path fill="#fff" d="M180 0h120v480H180z" />
  <path fill="#fff" d="M0 180h640v120H0z" />
  <path fill="#002664" d="M210 0h60v480h-60z" />
  <path fill="#002664" d="M0 210h640v60H0z" />
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

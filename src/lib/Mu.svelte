<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of mu';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-mu"
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
    <path fill="#00a04d" d="M0 360h640v120H0z" />
    <path fill="#151f6d" d="M0 120h640v120H0z" />
    <path fill="#ee2737" d="M0 0h640v120H0z" />
    <path fill="#ffcd00" d="M0 240h640v120H0z" />
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

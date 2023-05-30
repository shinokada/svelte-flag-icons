<script>
  export let size = '24';
  export let ariaLabel = 'flag of nl';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-nl"
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
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
  <path fill="#21468b" d="M0 0h640v480H0z" />
  <path fill="#fff" d="M0 0h640v320H0z" />
  <path fill="#ae1c28" d="M0 0h640v160H0z" />
</svg>

<!--
@component
[Go to Document](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = '24';
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

<script>
  export let size = '24';
  export let ariaLabel = 'flag of se';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-se"
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
  <path fill="#005293" d="M0 0h640v480H0z" />
  <path fill="#fecb00" d="M176 0v192H0v96h176v192h96V288h368v-96H272V0h-96z" />
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

<script>
  export let size = '24';
  export let ariaLabel = 'flag of bw';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-bw"
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
  <g fill-rule="evenodd">
    <path fill="#00cbff" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 160h640v160H0z" />
    <path d="M0 186h640v108H0z" />
  </g>
</svg>

<!--
@component
[Go to Document](https://svelte-ant-design-icons.codewithshin.com/)
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

<script>
  export let size = '24';
  export let ariaLabel = 'flag of mm';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icons-mm"
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
  <path fill="#fecb00" d="M0 0h640v480H0z" />
  <path fill="#34b233" d="M0 160h640v320H0z" />
  <path fill="#ea2839" d="M0 320h640v160H0z" />
  <g transform="translate(320 256.9) scale(176.87999)">
    <path id="a" fill="#fff" d="m0-1 .3 1h-.6z" />
    <use xlink:href="#a" width="100%" height="100%" transform="rotate(-144)" />
    <use xlink:href="#a" width="100%" height="100%" transform="rotate(-72)" />
    <use xlink:href="#a" width="100%" height="100%" transform="rotate(72)" />
    <use xlink:href="#a" width="100%" height="100%" transform="rotate(144)" />
  </g>
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

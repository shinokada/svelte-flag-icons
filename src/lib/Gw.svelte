<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of gw';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icons-gw"
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
  <path fill="#ce1126" d="M0 0h220v480H0z" />
  <path fill="#fcd116" d="M220 0h420v240H220z" />
  <path fill="#009e49" d="M220 240h420v240H220z" />
  <g id="b" transform="matrix(80 0 0 80 110 240)">
    <path id="a" d="M0-1v1h.5" transform="rotate(18 0 -1)" />
    <use xlink:href="#a" width="100%" height="100%" transform="scale(-1 1)" />
  </g>
  <use xlink:href="#b" width="100%" height="100%" transform="rotate(72 110 240)" />
  <use xlink:href="#b" width="100%" height="100%" transform="rotate(144 110 240)" />
  <use xlink:href="#b" width="100%" height="100%" transform="rotate(-144 110 240)" />
  <use xlink:href="#b" width="100%" height="100%" transform="rotate(-72 110 240)" />
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

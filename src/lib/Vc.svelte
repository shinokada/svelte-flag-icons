<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of vc';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-vc"
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
    <path fill="#f4f100" d="M0 0h640v480H0z" />
    <path fill="#199a00" d="M490 0h150v480H490z" />
    <path fill="#0058aa" d="M0 0h150v480H0z" />
    <path
      fill="#199a00"
      d="m259.3 130-46.4 71.3 44.7 74.4 43.8-73.7-42.1-72zm121.2 0-46.3 71.3 44.7 74.4 43.8-73.7-42.2-72zm-61.2 97.3-46.4 71.4 44.8 74.4 43.8-73.7-42.2-72z"
    />
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

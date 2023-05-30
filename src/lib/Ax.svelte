<script>
  export let size = '24';
  export let ariaLabel = 'flag of ax';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-ax"
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
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M106.3 0h1133.3v850H106.3z" />
    </clipPath>
  </defs>
  <g clip-path="url(#a)" transform="matrix(.56472 0 0 .56482 -60 -.1)">
    <path fill="#0053a5" d="M0 0h1300v850H0z" />
    <g fill="#ffce00">
      <path d="M400 0h250v850H400z" />
      <path d="M0 300h1300v250H0z" />
    </g>
    <g fill="#d21034">
      <path d="M475 0h100v850H475z" />
      <path d="M0 375h1300v100H0z" />
    </g>
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

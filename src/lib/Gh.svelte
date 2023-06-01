<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'flag of gh';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icons-gh"
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
  <path fill="#006b3f" d="M0 0h640v480H0z" />
  <path fill="#fcd116" d="M0 0h640v320H0z" />
  <path fill="#ce1126" d="M0 0h640v160H0z" />
  <path d="m320 160 52 160-136.1-98.9H404L268 320z" />
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

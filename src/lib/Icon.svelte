<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType;
  export let size: number = 24;
  export let role: string = 'img';
  export let ariaLabel: string = 'Icon';
</script>

<svelte:component this={icon} {...$$restProps} {role} {size} class={$$props.class} {ariaLabel} />

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com)
## Props
@prop export let icon: ComponentType;
@prop export let size: number = 24;
@prop export let role: string = 'img';
@prop export let ariaLabel: string = 'Icon';
-->

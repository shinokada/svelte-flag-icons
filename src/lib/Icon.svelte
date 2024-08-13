<script lang="ts">
  import type { Component } from 'svelte';
  import type { SVGAttributes } from 'svelte/elements';

  interface Props extends SVGAttributes<SVGElement> {
    Icon: Component;
    size?: string;
    role?: string;
    ariaLabel?: string;
  }
  let { Icon, size = '24', role = 'img', ariaLabel = 'Icon', ...restProps }: Props = $props();
</script>

<Icon {...restProps} {role} {size} aria-label={ariaLabel} />

<!--
@component
[Go to docs](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop Icon
@prop size = '24'
@prop role = 'img'
@prop ariaLabel = 'Icon'
@prop ...restProps
-->

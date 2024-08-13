<script lang="ts">
  import { Icon as FlagIcon } from 'svelte-flag-icons';
  import { type Component } from 'svelte';
  const config: { size: FlagIcon['Props']['size'], ariaLabel: string } = {
    size: "100",
    ariaLabel: "my custom icon",
  };
  interface Props {
    Icon: Component
  }

  let { Icon }: Props = $props();
</script>
<FlagIcon {...config} {Icon} />

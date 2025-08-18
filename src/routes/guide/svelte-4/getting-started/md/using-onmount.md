<script>
  import { Us } from 'svelte-flag-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    // other props
  };
  onMount(() => {
    const icon = new Us({ target: document.body, props });
  });
</script>

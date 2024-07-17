<script>
  import { Jp } from 'svelte-flag-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Jp({ target: document.body, props });
  });
</script>
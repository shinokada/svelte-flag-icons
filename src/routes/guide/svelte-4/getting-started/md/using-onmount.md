<script>
  import { AdminLineUserFaces } from 'svelte-flag-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new AdminLineUserFaces({ target: document.body, props });
  });
</script>
<script>
  import { setContext } from 'svelte';
  import { Za, Us } from '$lib';
  const iconCtx = {
    size: '100', // Icon size in pixels
    role: 'svg icon image'
  };
  setContext('iconCtx', iconCtx);
</script>

<Za />
<Us />

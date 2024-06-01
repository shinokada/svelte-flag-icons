<script>
  import { setContext } from 'svelte';
  import { Accessibility } from 'svelte-flag-icons';
  const iconCtx = {
    size: '30'
  };
  setContext('iconCtx', iconCtx);
</script>

<Accessibility color="#ff4488" />
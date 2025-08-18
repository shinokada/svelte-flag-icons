<script>
  import { setContext } from 'svelte';
  import { Jp } from 'svelte-flag-icons';
  const iconCtx = {
    size: '30'
  };
  setContext('iconCtx', iconCtx);
</script>

<Jp class='m-4' />

<script>
  import Tabs from 'flowbite-svelte/Tabs.svelte';
  import TabItem from 'flowbite-svelte/TabItem.svelte';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';

  import * as Icons from '$lib';

  const random_tailwind_color = () => {
    const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
    const shades = ['300', '400', '500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomShade = shades[Math.floor(Math.random() * shades.length)];
    return `text-${randomColor}-${randomShade} dark:text-${randomColor}-${randomShade} shrink-0 h-8 w-8`;
  };
  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  const contentClass = 'rounded-lg dark:bg-neutral-600 mt-4';
  let searchTerm = '';

  $: filteredEntries = Object.entries(Icons).filter(([name, component]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
</script>

<TableSearch
  placeholder="Search by icon name"
  hoverable={true}
  bind:inputValue={searchTerm}
  divClass='relative overflow-x-auto'
>
<div class="grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 px-4 dark:text-white">
  {#each filteredEntries as [name, component]}
    <div class="flex gap-4 items-center text-lg">
      <svelte:component this={component} class="shrink-0 h-20 w-20" />
      {name}
    </div>
  {/each}
</div>
</TableSearch>

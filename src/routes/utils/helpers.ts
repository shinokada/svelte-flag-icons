import type { Component } from 'svelte';
import { type ListType, sidebarList } from 'runes-webkit';
import { GridPlusOutline } from 'runes-webkit';

const extra: ListType[] = [
  {
    name: 'Flags',
    Icon: GridPlusOutline as Component,
    href: '/flags'
  },
  {
    name: 'Icon Sets',
    Icon: GridPlusOutline as Component,
    href: 'https://svelte-svg-icons.codewithshin.com/'
  }
];
export const newSidebarList: ListType[] = [...sidebarList, ...extra];

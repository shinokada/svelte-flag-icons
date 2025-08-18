<script lang="ts">
	import { IconPage, filterStringKeys } from 'runes-webkit';
	import * as icons from '$lib';

	const keyIcons = filterStringKeys(icons);
</script>

<IconPage
	minSize="60"
	defaultSize="80"
	maxSize="100"
	div3Class="lg:grid-cols-3 md:grid-cols-2 "
	icons={keyIcons}
	threeTabs={false}
	title="Flags - Svelte Flag Icons"
/>

<script lang="ts">
	import { Icon as FlagIcon } from '$lib';
	import { type Component } from 'svelte';
	const config: { size: string; ariaLabel: string; class: string } = {
		size: '100',
		ariaLabel: 'my custom icon',
		class: 'mx-4'
	};
	interface Props {
		Icon: Component;
	}

	let { Icon }: Props = $props();
</script>

<FlagIcon {...config} {Icon} />

<script>
	import { Us, Ca, Fr, De, Dk, Jp, No, Ch, Cz } from '$lib/index';
</script>

<div class="flags">
	<Us size="100" />
	<Ca size="100" />
	<Fr size="100" />
	<De size="100" />
	<Dk size="100" />
	<Jp size="100" />
	<No size="100" />
	<Ch size="100" />
	<Cz size="100" />
</div>

<div class="flags">
	<Us size="100" class="rounded-full bg-white ring-2 rring-gray-300 m-4" />
	<No size="100" class="rounded-full bg-white ring-2 ring-gray-300 m-4" />
	Tailwind CSS + Size
	<Ca class="rounded-full bg-white ring-2 ring-gray-300 m-4" size="100" />
	Tailwind CSS + size null
	<Fr class="rounded-full bg-white ring-2 ring-gray-300 m-4" size="100" />
</div>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
</svelte:head>

<style>
	.flags {
		background-color: #eee;
		padding: 40px;
	}
</style>

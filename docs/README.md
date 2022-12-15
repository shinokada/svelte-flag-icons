<h1 align="center">Svelte-Flag-Icons</h1>

<p align="center">
<a href="https://shinokada.github.io/svelte-flag-icons/">Svelte-Flag-Icons</a>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/svelte-flag-icons" rel="nofollow"><img src="https://img.shields.io/npm/v/svelte-flag-icons" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/shinokada/svelte-flag-icons" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-flag-icons" rel="nofollow"><img src="https://img.shields.io/npm/dw/svelte-flag-icons.svg" alt="npm"></a>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/shinokada/svelte-flag-icons/main/static/images/flag-all.png" />
</p>

260+ [Flag-icons](https://github.com/lipis/flag-icons) for Svelte. 

## Installation

```sh
npm i -D svelte-flag-icons
```

## REPL

[Demo 1](https://svelte.dev/repl/754f6d9e949441978f1073b68437129f?version=3.48.0)


## Icon Names

[Icon list](https://github.com/shinokada/svelte-flag-icons/blob/main/docs/icon-list.md)

## ISO 3166 Country Codes

[ISO 3166 Country Codes](https://github.com/shinokada/svelte-flag-icons/blob/main/iso-3166-country-codes.md)

## Size

Use the `size` prop to change the flag sizes.

```html
<script>
	import { Us, Ca, Fr, De, Dk, Jp, No, Ch, Cz } from 'svelte-flag-icons';
</script>

<div>
	<Us size="200" />
	<Ca size="200" />
	<Fr size="200" />
	<De size="200" />
	<Dk size="200" />
	<Jp size="200" />
	<No size="200" />
	<Ch size="200" />
	<Cz size="200" />
</div>
```

## CSS frameworks support

<p align="center">
<img src="https://raw.githubusercontent.com/shinokada/svelte-flags/main/static/images/flag2.png" />
</p>

You can change size and other CSS using the `class` prop.

Tailwind CSS example:

```html
<Us class="rounded-full bg-white h-40 w-40 ring-2 ring-gray-300 m-4" />
```

Or you can use `size` and `class` props together.

```html
# Tailwind CSS
<Us class="rounded-full bg-white h-40 w-40 ring-2 ring-gray-300 m-4" />
# Tailwind CSS + Size
<Ca class="rounded-full bg-white ring-2 ring-gray-300 m-4" size="150" />
```

Bootstrap example:

```html
<Us class="position-absolute top-0 px-1" />
```

## aria-label

All icons have aria-label. For example `Us` has `aria-label="flag of us"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Us ariaLabel="United States of America" />
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<Us tabindex="0" />
```

## Using svelte:component

```html
<script>
	import { Ca } from 'svelte-flag-icons';
</script>

<svelte:component this="{Ca}" />
```

## Using onMount

```html
<script>
	import { ChatPlus } from 'svelte-flag-icons';
	import { onMount } from 'svelte';
	const props = {
		size: '50',
		color: '#ff0000'
	};
	onMount(() => {
		const icon = new Us({ target: document.body, props });
	});
</script>
```

## Import all

Use `import * as Icon from 'svelte-flag-icons`.

[REPL](https://svelte.dev/repl/754f6d9e949441978f1073b68437129f?version=3.48.0)

```html
<script>
	import * as Icon from 'svelte-flag-icons';
</script>
<h1>Size</h1>
<Icon.Fr size="30" />
<Icon.De size="40" />

<h1>CSS HEX color</h1>
<Icon.Dk color="#c61515" size="40" />

<h1>Tailwind CSS</h1>
<Icon.Jp class="text-blue-500" />
<Icon.No class="text-pink-700" />
```

## Credit

All the credits goes to [flag-icons](https://github.com/lipis/flag-icons)

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

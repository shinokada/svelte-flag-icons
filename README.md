# Svelte-flags

[![npm version](https://badgen.net/npm/v/svelte-flag-icons)](https://www.npmjs.com/package/svelte-flag-icons)
[![license](https://badgen.net/npm/license/svelte-flag-icons)](https://github.com/shinokada/svelte-flag-icons/blob/main/LICENSE)
[![downloads](https://badgen.net/npm/dm/svelte-flag-icons)](https://github.com/shinokada/svelte-flag-icons)

- [Flag-icons](https://github.com/lipis/flag-icons)
- CSS frameworks support




## Installation

```sh
npm i -D svelte-flag-icons
```

## Size

Use the `size` prop to change the flag sizes.


```html
<script>
  import { Us, Ca, Fr, De, Dk, Jp, No, Ch, Cz } from "svelte-flags";
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
<Us class="rounded-full bg-white h-40 w-40 ring-2 rring-gray-300 m-4" />
```

Or you can use `size` and `class` props together.

```html
Tailwind CSS
<Us class="rounded-full bg-white h-40 w-40 ring-2 ring-gray-300 m-4" />
Tailwind CSS + Size
<Ca class="rounded-full bg-white ring-2 ring-gray-300 m-4" size="150"/>
Tailwind CSS + size null
<Fr class="rounded-full bg-white w-40 ring-2 ring-gray-300 m-4" size="150" />
```

Bootstrap example:

```html
<Us class="position-absolute top-0 px-1" />
```

## Svlete Icon Names

[Icon list](https://github.com/shinokada/svelte-flag-icons/blob/main/icon-list.md)

## ISO 3166 Country Codes

[ISO 3166 Country Codes](https://github.com/shinokada/svelte-flag-icons/blob/main/iso-3166-country-codes.md)


## aria-label

All icons have aria-label. For example `AccessPointOff` has `aria-label="access point off"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<AccessPointOff ariaLabel="Access off">
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<AccessPointOff tabindex="0">
```

## Using svelte:component

```html
<script>
	import { ChatPlus } from 'svelte-materialdesign-icons';
	const props = {
		size: '50',
		color: '#ff0000'
	};
</script>

<svelte:component this={ChatPlus} />
```

## Using onMount

```html
<script>
  import { ChatPlus } from 'svelte-materialdesign-icons';
	import { onMount } from 'svelte';
	onMount(() => {
		const icon = new ChatPlus({ target: document.body, props });
	});
</script>
```

## Import all

[REPL](https://svelte.dev/repl/c0045886b264408fba13f1de70c42932?version=3.48.0)

Use `import * as Icon from 'svelte-materialdesign-icons`.

```html
<script>
	import * as Icon from 'svelte-materialdesign-icons';
</script>

<Icon.Bucket />
<Icon.Card />

<h1>Size</h1>
<Icon.Bucket size="30" />
<Icon.Card size="40" />

<h1>CSS HEX color</h1>
<Icon.Bucket color="#c61515" size="40" />

<h1>Tailwind CSS</h1>
<Icon.Bucket class="text-blue-500" />
<Icon.Card class="text-pink-700" />
```

## Credit

All the credits goes to [flag-icons](https://github.com/lipis/flag-icons)


## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

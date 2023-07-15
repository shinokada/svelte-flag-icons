# Svelte Flag Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-flag-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-flag-icons" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-flag-icons" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-flag-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-flag-icons.svg" alt="npm" height="25"></a>
</div>

260+ [Flag-icons](https://github.com/lipis/flag-icons) for Svelte.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.


## Repo

[GitHub Repo](https://github.com/shinokada/svelte-flag-icons)

## Original source

[lipis/flag-icons](https://github.com/lipis/flag-icons)

## License

[Svelte-Flag-Icons License](https://github.com/shinokada/svelte-flag-icons/LICENSE)

[lipis/flag-icons License](https://github.com/lipis/flag-icons/blob/main/LICENSE)

## Installation

```sh
pnpm i -D svelte-flag-icons
```

## ISO 3166 Country Codes

[ISO 3166 Country Codes](/iso-3166-country-codes.md)

## Usage

```html
<script>
  import { Us } from 'svelte-flag-icons';
</script>

<Us />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import No from 'svelte-flag-icons/No.svelte';
</script>

<No />
```

If you are a TypeScript user, install **typescript version 5.0.0 or above**.

```sh
pnpm i -D typescript@beta
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```

## Props

- size = '24';
- role = 'img';
- ariaLabel = 'icon file name';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `size` prop to change the flag sizes.

```html
<script>
  import { Us } from 'svelte-flag-icons';
</script>

<div>
  <Us size="200" />
</div>
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

<Us class="shrink-0 h-20 w-20" />

## CSS frameworks support

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

Tailwind CSS example:

```html
<Us class="rounded-full bg-white h-40 w-40 ring-2 ring-gray-300 m-4" />
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

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Us tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

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

## Rendering Dynamically

[REPL](https://svelte.dev/repl/e986f22713d34ec2b5e8fdd98301f936?version=4.0.5)

```html
<script>
  import * as Flag from "svelte-flag-icons";
	const users =[
		{
			name: 'John',
			country: 'Ca'
		},
		{
			name: 'Jane',
			country: 'Us'
		}
	]
	const a_user ={
		country:'Fr'
	}
</script>

<svelte:component this={Flag[a_user.country]} size="100" style="margin-right:10px;" />

{#each users as user}
  <svelte:component this={Flag[user.country]} size="100" style="margin-right: 10px;"/>
{/each}
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

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)


# Svelte Flag Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-flag-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-flag-icons" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-flag-icons" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-flag-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-flag-icons.svg" alt="npm" height="25" style="height: 25px !important;"></a>
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
  import { Icon } from 'svelte-flag-icons';
</script>

<Icon name="us" />
```

## Props

- export let name;
- export let width = "24";
- export let height = "24";
- export let role = 'img';
- export let ariaLabel = name;

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.


## Size

Use the `width` and `height` props to change the size of icons.

```html
<Icon name="us" width="100" height="100" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<Icon name="us" class="shrink-0 h-20 w-20" />
```

## CSS frameworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

Tailwind CSS example:

```html
<Icon name="us" class="inline m-1" />
```

Bootstrap examples:

```html
<Icon name="us" class="position-absolute top-0 px-1" />
```

## aria-label

All icons have aria-label. For example `us` has `aria-label="us"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Icon name="us" ariaLabel="us flag" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Icon name="us"  tabindex="-1" />
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
<Icon name="us"  tabindex="0" />
```

## Using svelte:component

```html
<svelte:component this="{Icon}" name="us" />
```

## Using onMount

```html
<script>
  import {Icon} from 'svelte-flag-icons';
  import { onMount } from 'svelte';
  const props = {
    name: 'us',
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Icon({ target: document.body, props });
  });
</script>
```


## Import all

Use `import {Icon, icons} from 'svelte-flag-icons';`.

```html
<script>
  import {Icon, icons} from 'svelte-flag-icons';
</script>

{#each Object.keys(icons) as name}
<div class="flex gap-4 items-center text-lg">
  <Icon name={name} class="shrink-0"/>
  {name}
</div>
{/each}
```

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
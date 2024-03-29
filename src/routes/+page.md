---
layout: mainLayout
---

<script>
  import { Banner } from 'flowbite-svelte';
</script>

<Banner id="default-banner" dismissable={false} classDiv='p-2'>
  <p class="flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100">
      To Keep It Going, Please Show Your Love.<a href='https://ko-fi.com/Z8Z2CHALG' target='_blank'><img height='42' style='border:0px;height:42px;' src='https://storage.ko-fi.com/cdn/kofi3.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
  </p>
</Banner>

# Svelte Flag Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor"></a>
<a href="https://www.npmjs.com/package/svelte-flag-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-flag-icons" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-flag-icons" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-flag-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-flag-icons.svg" alt="npm"></a>
</div>

260+ [Flag-icons](https://github.com/lipis/flag-icons) for Svelte.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub Repo](https://github.com/shinokada/svelte-flag-icons)

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

## Props

- size = ctx.size || '24';
- role = ctx.role || 'img';
- ariaLabel = 'flag of xx';

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

```html
<Us class="shrink-0 h-20 w-20" />
```

## Setting Global Icon using setContext

You can establish global icon preferences in your Svelte application using `setContext`. This allows you to configure icon-related properties once and share them across multiple components. Here's how you can do it:

```html
<script>
  import { setContext } from 'svelte';

  // Define your global icon settings
  const iconCtx = {
    size: '100'
  };
  setContext('iconCtx', iconCtx);
</script>
```

The `size`, `ariaLabel`, and `role` properties are optional, allowing you to fine-tune the appearance and accessibility of your icons as needed.

If you set `size`, icons can be customized with different colors. For example:

```html
<script>
  import { setContext } from 'svelte';
  import { Us } from 'svelte-evil-icons';
  const iconCtx = {
    size: '50'
  };
  setContext('iconCtx', iconCtx);
</script>

<Us ariaLabel="USA flag" />
```

Remember that you can set only one or two of these properties, allowing you to tailor icon settings to your specific design and accessibility requirements.

Feel free to mix and match these properties as needed to create visually appealing and accessible icons in your Svelte application.

## Creating a Default Icon Setting

You can create a config file, `/src/lib/icon.config.json`.

The `Icon` component serves as a wrapper for svelte:component, allowing you to establish a global default setting or expand the capabilities of a component.

To create a default global icon setting, follow these steps:

### Configuration File

Start by creating a configuration file named `/src/lib/icon.config.json` with the following structure:

```json
{
  "config1": {
    "size": 40,
    "color": "#FF5733"
  },
  "config2": {
    "size": 50,
    "color": "#445533"
  }
}
```

In this JSON file, you can define different configurations (config1 and config2 in this case) for your icons, specifying attributes like size, variation, and color.

### Implementation

In your Svelte page file, make use of the configurations from the JSON file:

```html
<script lang="ts">
  type IconConfig = {
    config1: {
      size: number;
    };
    config2: {
      size: number;
    };
  };
  import config from '$lib/icon.config.json';
  import { Icon, Us, No } from 'svelte-flag-icons';

  const iconConfig: IconConfig = config;
  const config1 = iconConfig.config1;
  const config2 = iconConfig.config2;
</script>

<Icon {...config1} icon="{Us}" />
<Icon {...config2} icon="{No}" />
```

We import the configurations from the JSON file and assign them to config1 and config2. We then utilize the Icon component with the spread attributes `{...config1}` and `{...config2}` to apply the respective configurations to each icon.

### Custom Default Icon

If you wish to create a custom default icon, you can follow these steps:

Create a Svelte component named `src/lib/MyIcon.svelte`:

```html
<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: 30,
    color: '#FF5733'
  };
  import { Icon } from 'svelte-flag-icons';
  export let icon: ComponentType;
</script>

<Icon {...config} {icon} />
```

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

### Implementation in a Page

To use your custom default icon in a Svelte page, do the following:

```html
<script>
  import MyIcon from '$lib/MyIcon.svelte';
  import { Us } from 'svelte-flag-icons';
</script>

<MyIcon icon="{Us}" />
```

Here, we import the `MyIcon` component and the `Us` icon. By passing the `Us` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.

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
  import * as Flag from 'svelte-flag-icons';
  const users = [
    {
      name: 'John',
      country: 'Ca'
    },
    {
      name: 'Jane',
      country: 'Us'
    }
  ];
  const a_user = {
    country: 'Fr'
  };
</script>

<svelte:component this="{Flag[a_user.country]}" size="100" style="margin-right:10px;" />

{#each users as user}
<svelte:component this="{Flag[user.country]}" size="100" style="margin-right: 10px;" />
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

## Original source

[lipis/flag-icons](https://github.com/lipis/flag-icons)

## License

[Svelte-Flag-Icons License](https://github.com/shinokada/svelte-flag-icons/LICENSE)

[lipis/flag-icons License](https://github.com/lipis/flag-icons/blob/main/LICENSE)

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.codewithshin.com/)

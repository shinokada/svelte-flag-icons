<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { Jp } from '$lib';
  import { A, P } from 'svelte-5-ui-lib';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Props - Svelte Flag Icons v2</h1>

<H2>Props</H2>
<P>
  All icons are extended <A
    href="https://github.com/sveltejs/svelte/blob/main/packages/svelte/elements.d.ts"
    >SVGAttributes from svelte/elements</A
  >.
</P>
<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />

<H2>Size</H2>

<p>
  To change the size of an icon, use the <Code>size</Code> prop and specify the desired size. For example:
</p>
<HighlightCompo codeLang="ts" code={modules['./md/size.md'] as string} />

<p>
  You can add a custom size using Tailwind CSS by including the desired classes in the <Code
    >class</Code
  > prop. For example:
</p>

<HighlightCompo codeLang="ts" code={modules['./md/size-2.md'] as string} />

<H2>CSS framework</H2>

<p>
  You can apply CSS framework color and other attributes directly to the icon component or its
  parent tag using the <Code>class</Code> prop.
</p>

<H3>Tailwind CSS</H3>

<HighlightCompo codeLang="ts" code={modules['./md/tailwind-css.md'] as string} />

<H3>Bootstrap</H3>

<HighlightCompo codeLang="ts" code={modules['./md/bootstrap.md'] as string} />

<H2>A11y</H2>

<p>
  All icons have aria-label. For example <Code>Jp</Code> has <Code>aria-label="jp"</Code>. Use <Code
    >ariaLabel</Code
  > prop to modify the <Code>aria-label</Code> value.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/a11y.md'] as string} />

<p>
  Use <Code>title</Code>, <Code>desc</Code>, and <Code>ariaLabel</Code> props to make your icons accessible.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/a11y-2.md'] as string} />

<CodeWrapper>
  <Jp
    title={{ id: 'my-title', title: 'Japanese flag icon' }}
    desc={{ id: 'my-descrip', desc: 'Red sun on white field, simple design for easy recognition.' }}
    ariaLabel="Japanese flag"
  />
</CodeWrapper>

<H2>Passing down other attributes</H2>

<P>
  Since all icons have <Code>...restProps</Code>, you can pass other <A
    target="_blank"
    href="https://github.com/sveltejs/svelte/blob/main/packages/svelte/elements.d.ts"
    >SVGAttributes</A
  >.
</P>

<CodeWrapper>
  <Jp
    id="my-svg"
    transform="rotate(45)"
    class="hover:cursor-pointer dark:text-white"
    onclick={() => alert('hello')}
  />
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} />

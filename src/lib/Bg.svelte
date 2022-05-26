<script>
	export let size = '24';
	export let ariaLabel = 'flag of bg';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	id="flag-icons-bg"
	width={size}
	height={size}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 640 480"
>
	<g fill-rule="evenodd" stroke-width="1pt">
		<path fill="#d62612" d="M0 320h640v160H0z" />
		<path fill="#fff" d="M0 0h640v160H0z" />
		<path fill="#00966e" d="M0 160h640v160H0z" />
	</g>
</svg>

<script>
	export let size = '24';
	export let ariaLabel = 'flag of mc';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	id="flag-icons-mc"
	width={size}
	height={size}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 640 480"
>
	<g fill-rule="evenodd" stroke-width="1pt">
		<path fill="#f31830" d="M0 0h640v240H0z" />
		<path fill="#fff" d="M0 240h640v240H0z" />
	</g>
</svg>

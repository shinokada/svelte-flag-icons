<script>
	export let size = '24';
	export let ariaLabel = 'flag of gl';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	id="flag-icons-gl"
	width={size}
	height={size}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 640 480"
>
	<path fill="#fff" d="M0 0h640v480H0z" />
	<path fill="#d00c33" d="M0 240h640v240H0zm80 0a160 160 0 1 0 320 0 160 160 0 0 0-320 0" />
</svg>

<script>
	export let size = '24';
	export let ariaLabel = 'flag of cz';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	id="flag-icons-cz"
	width={size}
	height={size}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 640 480"
>
	<path fill="#fff" d="M0 0h640v240H0z" />
	<path fill="#d7141a" d="M0 240h640v240H0z" />
	<path fill="#11457e" d="M360 240 0 0v480z" />
</svg>

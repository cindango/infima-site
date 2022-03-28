<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import logo from './InfimaLogo_Thin.svg';
	export let document;

	let y;
	let loaded = false;
	let navState = '';
	let show = false;
	let products = false;
	let solutions = false;

	onMount(() => {
		loaded = true;
	});

	function openProducts(e) {
		navState = 'expanded';
		products = true;
	}

	function openSolutions(e) {
		navState = 'expanded';
		solutions = true;
	}

	function closeNav(e) {
		navState = '';
		products = false;
		solutions = false;
	}

</script>

<svelte:window bind:scrollY={y}/>

<header class={y > 50 ? "nav-s" : ""} class:expanded="{navState === 'expanded'}">
	<div class="inner">
	{#if loaded}
		<nav>
			<ul>
				<li>
					<a sveltekit:prefetch href="/">
						<img class="i-logo" src={logo} alt="Infima" />
					</a>
				</li>
			</ul>
			<ul class="links">
				<li class="sub-menu products" class:open="{products}" on:mouseenter={openProducts} on:mouseleave={closeNav}>
					<a>Products</a>
						<div class="dropdown" on:click={closeNav}>
							<li>
								<a href="/products/infima-platform">Infima Platform</a>
							</li>
							<li>
								<a href="/products/infima-libraries">Infima Libraries</a>
							</li>
							<li>
								<a href="/products/infima-apis">Infima APIs</a>
							</li>
						</div>
				</li>
				<li class="sub-menu solutions" class:open="{solutions}" on:mouseenter={openSolutions} on:mouseleave={closeNav}>
					<a>Solutions</a>
						<div class="dropdown" on:click={closeNav}>
							<li>
								<a href="/solutions/asset-managers">Asset Managers</a>
							</li>
							<li>
								<a href="/solutions/dealers">Dealers</a>
							</li>
						</div>
				</li>
				<li>
					<a sveltekit:prefetch href="/insights">Insights</a>
				</li>
				<li>
					<a sveltekit:prefetch href="/company">Company</a>
				</li>
				<li>
					<a href="https://app.infima.io" target="_blank">Sign In</a>
				</li>
			</ul>
		</nav>
	{/if}
	</div>
</header>

<style>
	.links > li {
		height: 20px;
		min-height: 20px;
		transition: height .25s ease;
		overflow: hidden;
	}
	.dropdown {
		position: absolute;
		margin: 2rem 0;
		opacity: 0;
		transition: opacity .25s linear;
		height: 0;
		overflow: hidden;
	}
	.dropdown li a {
		display: inline-block;
		text-transform: unset;
		margin: 5px 0;
		text-transform: lowercase;
	}
	.links li.products.open {
		height: 160px;
	}
	.links li.solutions.open {
		height: 130px;
	}
	.open .dropdown {
		opacity: 1;
		transition-delay: .25s;
		height: auto;
	}
	header {
		display: flex;
		justify-content: center;
		position: fixed;
		width: 100%;
		z-index: 99;
		transition: background-color .5s ease, backdrop-filter .5s ease, box-shadow .5s ease;

	}
	header.nav-s {
		background-color: rgba(var(--background-color-rgb), .85);
    backdrop-filter: saturate(180%) blur(20px);
		transition-property: background-color, backdrop-filter;
		transition: background-color 2s ease, backdrop-filter 3s ease;
	}
	header.expanded {
		background-color: rgba(var(--background-color-rgb), .85);
    backdrop-filter: saturate(180%) blur(20px);
		transition-property: background-color, backdrop-filter;
		transition: background-color 1s ease, backdrop-filter 1s ease, box-shadow .5s ease;
		box-shadow: 0 0 20px black;
	}
	.i-logo {
		opacity: 1;
		transition: all 1s linear;
	}
	header.nav-s .i-logo {
		opacity: .8;
	}
	.inner {
		width: 100%;
		max-width: 1600px;
		padding: 1rem 1rem;
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	ul.links {
		display: flex;
    justify-content: end;
    gap: 30px;
	}

	li {
		line-height: 100%;
	}

	header.nav-s nav a {
		opacity: .7;
	}

	nav a {
		height: 100%;
		color: var(--heading-color);
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 0.04em;
		text-decoration: none;
		transition: all 0.2s linear;
		text-transform: lowercase;
	}

	.nav-s a:hover {
		opacity: 1;
	}

	@media (min-width:720px) {
		.inner {
			padding: 1.5rem 2rem;
		}
	}
</style>

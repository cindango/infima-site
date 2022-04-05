<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import logo from './InfimaLogo_Thin.svg';
	import MobileNav from './MobileNav.svelte';
	import { browser } from '$app/env';

	let y;
	let loaded = false;
	let show_mobile_nav = false;

	let navState = '';
	let show = false;
	let products = false;
	let solutions = false;
	let about = false;

	$: if (browser) document.body.classList.toggle('overflow-hidden', show_mobile_nav);

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

	function openAbout(e) {
		navState = 'expanded';
		about = true;
	}

	function closeNav(e) {
		navState = '';
		products = false;
		solutions = false;
		about = false;
	}

</script>

<svelte:window bind:scrollY={y}/>

<header class={y > 50 ? "nav-s" : ""} class:expanded="{navState === 'expanded'}" class:mobile-open={show_mobile_nav}>
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

					<a>Products <span class="icon-expand_more"></span></a>

						<div class="dropdown" on:click={closeNav}>
							<ul>
								<li>
									<a href="/products/infima-platform">Infima Platform</a>
								</li>
								<li>
									<a href="/products/infima-libraries">Infima Libraries</a>
								</li>
								<li>
									<a href="/products/infima-apis">Infima APIs</a>
								</li>
							</ul>
						</div>

				</li>

				<li class="sub-menu solutions" class:open="{solutions}" on:mouseenter={openSolutions} on:mouseleave={closeNav}>

					<a>Solutions <span class="icon-expand_more"></span></a>

						<div class="dropdown" on:click={closeNav}>
							<ul>
								<li>
									<a href="/solutions/asset-managers">Asset Managers</a>
								</li>
								<li>
									<a href="/solutions/dealers">Dealers</a>
								</li>
							</ul>
						</div>

				</li>

				<li>

					<a sveltekit:prefetch href="/insights">
						Insights
					</a>

				</li>

				<li class="sub-menu solutions" class:open="{about}" on:mouseenter={openAbout} on:mouseleave={closeNav}>

					<a>More <span class="icon-expand_more"></span></a>

						<div class="dropdown" on:click={closeNav}>
							<ul>
								<li>
									<a href="/about">About</a>
								</li>
								<li>
									<a href="/news">News</a>
								</li>
							</ul>
						</div>

				</li>

				<li>
					<a href="https://app.infima.io" target="_blank">
						Sign In
					</a>
				</li>

			</ul>

			<ul class="mobile-toggle">
				<button on:click={() => show_mobile_nav = !show_mobile_nav}>
					<span class:close={show_mobile_nav} />
					<span class:close={show_mobile_nav} />
				</button>
			</ul>

		</nav>
	{/if}
	</div>
</header>

<MobileNav bind:show={show_mobile_nav} />

<style>
	.mobile-toggle {
		display: block;
	}
	.mobile-toggle button {
		display: block;
		height: 100%;
	}
	.mobile-toggle button span {
		display: block;
		height: 1px;
		width: 30px;
		background: white;
		margin: .5rem 0;
		transition: transform .5s ease, margin .5s ease;
	}
	.mobile-toggle button span.close {
		margin: 0;
	}
	.mobile-toggle button span.close:nth-child(1) {
		transform: rotate(45deg);
	}
	.mobile-toggle button span.close:nth-child(2) {
		transform: rotate(-45deg);
		margin-top: -1px;
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
	header.mobile-open {
		background-color: rgba(var(--background-color-rgb), .85);
    transition-delay: 1s;
	}
	.i-logo {
		opacity: 1;
		transition: opacity .5s ease;
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
		display: none;
    justify-content: end;
    gap: 30px;
	}

	li {
		line-height: 100%;
	}

	header.nav-s nav a {
		color: rgba(255,255,255,.75);
	}

	nav a {
		height: 100%;
		color: rgba(255,255,255,.9);
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 0.04em;
		text-decoration: none;
		transition: color 0.25s linear;
		text-transform: lowercase;
	}

	nav li:hover > a,
	header.expanded:hover nav li.open > a,
	header.expanded:hover nav li.open .dropdown a,
	header.expanded:hover nav ul > li > a:hover {
		opacity: 1;
		color: rgba(255,255,255,1);
	}

	header.expanded:hover nav ul > li > a {
		opacity: .5;
	}

	.links > li {
		height: 24px;
		min-height: 24px;
		transition: height .25s ease;
	}
	.links > li > a {
		padding-left: 8px;
		line-height: 1.2;
	}
	.links > li > a span {
		vertical-align: bottom;
		opacity: .9;
		font-size: 18px;
		margin-left: -2px;
    margin-bottom: -1px;
	}
	.dropdown {
		position: absolute;
		margin: 1.15rem 0;
		opacity: 0;
		transition: opacity .25s linear;
		height: 0;
		overflow: hidden;
	}
	.dropdown li a {
		display: inline-block;
		text-transform: unset;
		margin: 5px 0;
		color: rgba(255,255,255,.8);
		border-left: 1px solid rgba(255,255,255,0);
		padding-left: 8px;
	}
	.dropdown li a:hover {
		color: rgba(255,255,255,1);
		border-left: 1px solid rgba(255,255,255,.8);
	}
	.links li.products.open {
		height: 130px;
	}
	.links li.solutions.open {
		height: 100px;
	}
	.open .dropdown {
		opacity: 1;
		transition-delay: .25s;
		height: auto;
	}

	@media (min-width:720px) {
		.inner {
			padding: 1.5rem 2rem;
		}
		.mobile-toggle {
			display: none;
		}
		ul.links {
			display: flex;
		}
	}
</style>

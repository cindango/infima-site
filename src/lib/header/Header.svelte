<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import MobileNav from './MobileNav.svelte';
	import { browser } from '$app/env';
	import Logo from './Logo.svelte';

	let y;
	let show_mobile_nav = false;

	let navState = '';
	let show = false;
	let products = false;
	let solutions = false;
	let about = false;

	$: if (browser) document.querySelector('body > div').classList.toggle('no-scroll', show_mobile_nav);

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

<svelte:window bind:scrollY={y} />

<header class={y > 50 ? "nav-s" : ""} class:expanded="{navState === 'expanded'}" class:mobile-open={show_mobile_nav}>
	<div class="inner">
		<nav>

			<ul>
				<li class="logo">
					<a sveltekit:prefetch href="/">
						<Logo />
					</a>
				</li>
			</ul>

			<ul class="links">

				<li class="sub-menu products" class:open="{products}" on:mouseenter={openProducts} on:mouseleave={closeNav}>

					<span class="top-level">Products <span class="icon-expand_more"></span></span>

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

					<span class="top-level">Solutions <span class="icon-expand_more"></span></span>

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

					<span class="top-level">More <span class="icon-expand_more"></span></span>

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

				<li class="contact">
					<a class="button primary-btn" href="/contact">
						Talk to Us
					</a>
				</li>

			</ul>

			<ul class="mobile-toggle">
				<li>
					<button aria-label="Mobile Menu" on:click={() => show_mobile_nav = !show_mobile_nav}>
						<span class:close={show_mobile_nav} />
						<span class:close={show_mobile_nav} />
					</button>
				</li>
			</ul>

		</nav>
	</div>
</header>

<MobileNav bind:show={show_mobile_nav} />

<style>
	.mobile-toggle {
		display: flex;
		height: 26px;
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
		top: 0;
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
	.logo {
		opacity: 1;
		transition: opacity .5s ease;
	}
	header.nav-s .logo {
		opacity: .8;
	}
	.inner {
		width: 100%;
		max-width: 1600px;
		padding: .85rem 1.25rem;
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	ul.links {
		display: none;
    justify-content: flex-end;
    gap: 30px;
	}

	li {
		line-height: 100%;
	}

	li.logo {
		padding-top:4px;
		padding-bottom: 4px;
	}

	.links > li:not(.contact) {
		padding-top:5px;
		padding-bottom: 2px;
	}

	li.contact {
		padding-top: 2px;
	}

	li.contact a.button.primary-btn {
		margin: 0;
		padding: 5px 10px 7px;
		line-height: 1;
		height: auto;
		transition: background .75s ease, opacity .5s ease;
	}

	header.nav-s nav a {
		color: rgba(255,255,255,.75);
	}

	nav a, nav .top-level {
		height: 100%;
		color: rgba(255,255,255,.9);
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 0.04em;
		text-decoration: none;
		transition: color 0.25s linear, opacity .5s ease;
		text-transform: lowercase;
		cursor: pointer;
	}

	nav li:hover > .top-level,
	header.expanded:hover nav li.open > .top-level,
	header.expanded:hover nav li.open .dropdown a,
	header.expanded:hover nav ul > li > .top-level:hover {
		opacity: 1;
		color: rgba(255,255,255,1);
	}

	header.expanded:hover nav ul > li > a,
	header.expanded:hover nav ul > li > .top-level {
		opacity: .5;
	}

	.links > li {
		height: 24px;
		min-height: 24px;
		transition: height .25s ease;
	}
	.links > li > a,
	.links > li > .top-level {
		padding-left: 8px;
		line-height: 1.2;
		position: relative;
	}
	.links > li > .top-level span {
		opacity: .9;
		font-size: 18px;
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

	@media (min-width:820px) {
		.inner {
			padding: 1.2rem 2rem;
		}
		.mobile-toggle {
			display: none;
		}
		ul.links {
			display: flex;
		}
		li.sub-menu {
			padding-right: 18px;
		}
		li.sub-menu .top-level > span {
			position: absolute;
			top: 1px;
			right: -20px;
		}
	}
	@media (max-width:820px) {
		nav {
			align-items: center;
		}
		header.mobile-open {
			background-color: rgba(var(--background-color-rgb), .85);
	    transition-delay: 1s;
		}
		:global(body > div.no-scroll) {
			position: fixed;
			overflow: hidden;
		}
	}
</style>
